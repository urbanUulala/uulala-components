import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { MetadataGridColumnModel } from "../models/getters/metadata-grid-column.model";
import { MetadataGridRowModel } from "../models/getters/metadata-grid-row.model";
import { MetadataGridRowDataModel } from "../models/getters/metadata-row-data.model";

import { metadataQueries } from "../queries/metadata.queries";
import { ArrayTools } from "../utilities";
import { GraphService } from "./graph.service";
import { LocalService } from "./local.service";

export type MetadataModules =
    'employees';


const metadataIds = {
    employees: 1
}

@Injectable({
    providedIn: 'root'
})
export class MetadataService {
    constructor(
        private graphService: GraphService,
        private localService: LocalService,
    ) { }

    getId(key: MetadataModules) {
        return metadataIds[key];
    }

    getDataFromCatalogGrid(catalogId: number, filter: string = '') {
        return this.graphService.execQuery(
            metadataQueries.GET_DATA_FROM_GRID,
            {
                token: this.localService.getValue( 'token' ),
                table: catalogId.toString(),
                filter
            },
            "no-cache"
        ).pipe(
            map(result => ( this.processData(result.data['getDatas'])))
        )
    }

    processData(dataGrid:any) {
        // Get all columns 
        let columns: MetadataGridColumnModel[] = this.getColumnsForGrid(dataGrid);
        
        // Get column keys 
        let keys: MetadataGridColumnModel[] = columns.filter(column => column.primaryKey);

        // Filter and sort columns with show property is true
        columns = ArrayTools.orderArray(columns.filter( column => column.isVisible ), ['alignment']) 

        // console.log('order and filter columns', columns);
        // Create data arrays with column orders 
        let dataColumns: MetadataGridRowModel[] = this.getDataForGrid(dataGrid, columns, keys);

        return {
            tableId: dataGrid.tableId,
            table: dataGrid.table,
            columns: columns.filter( column => column.isVisible ),
            keys,
            dataColumns
        }
    }

    getColumnsForGrid(data: any) {
        let gridJson: any = JSON.parse(data.gridJson);

        let gridData: MetadataGridColumnModel[] = [];

        gridJson.Columns.forEach(element => {
            gridData.push({
                alignment: element.Alignment,
                controlType: element.ControlType,
                dataType: element.DataType,
                description: element.Description,
                id: element.Id,
                isGroup: element.IsGroup,
                isVisible: element.IsVisible,
                mask: element.Mask,
                name: element.Name,
                primaryKey: element.PrimaryKey,
                userPermission: element.UserPermission,
                widthColumn: element.WidthColumn
            })
        });



        return ArrayTools.orderArray(gridData, ['alignment']);

    }

    getColumnKeys(columns: MetadataGridColumnModel[]) {
        columns.filter(column => column.primaryKey)
    }

    getDataForGrid(dataGrid: any, columns: MetadataGridColumnModel[], keys: MetadataGridColumnModel[]) {
        let returnData: MetadataGridRowModel[] = [];
        let gridData: any = JSON.parse(dataGrid.propertiesJson);
        // console.log('propertiesJson', gridData);

        gridData.forEach(data => {
            returnData.push({
                data: this.getDataForGridColumns(data, columns),
                keys: this.getDataForGridColumns(data, keys)
            })
        });

        // console.log('return data in grid', returnData);

        return returnData;
    }

    getDataForGridColumns(data:any[], columns: MetadataGridColumnModel[]) {
        let returnData: MetadataGridRowDataModel[] = [];
        columns.forEach(element => {
            let columnSelected: any = data.filter( filterElement => filterElement.FieldId === element.id)[0] || null;
            if(columnSelected) 
            returnData.push({
                fieldId: columnSelected.FieldId,
                isChildField: columnSelected.IsChildField,
                isGuid: columnSelected.IsGuid,
                valueQl: columnSelected.ValueQl,
                widthColumn: element.widthColumn
            })
        });

        return returnData;
    }
}