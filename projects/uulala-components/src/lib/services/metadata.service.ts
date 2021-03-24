import { Injectable } from "@angular/core";

// Rxjs
import { map } from "rxjs/operators";

// Models
import { SelectListItem } from "../models/configurations";
import { MetadataFieldModel } from "../models/getters/metadata-field.model";
import { MetadataGridColumnModel } from "../models/getters/metadata-grid-column.model";
import { MetadataGridRowModel } from "../models/getters/metadata-grid-row.model";
import { MetadataModalModel } from "../models/getters/metadata-modal.model";
import { MetadataGridRowDataModel } from "../models/getters/metadata-row-data.model";
import { MetadataTabModel } from "../models/getters/metadata-tab.model";
import { MetadataLevelInfoModel } from "../models/getters/metadata-level.model";
import { MetadataValueModal } from "../models/getters/metadata-value.model";
import { AccountModel } from "../models/getters/account.model";
import { CompanyModel } from "../models/getters/company.model";


// Queries
import { metadataQueries } from "../queries/metadata.queries";

// Utilities
import { ArrayTools, StringTools } from "../utilities";

// Services
import { GraphService } from "./graph.service";
import { LocalService } from "./local.service";
import { UserService } from "./user.service";

// Constants
import { metadataConstants } from "../constants/metadata.constants";

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
        private userService: UserService
    ) { }

    getId(key: MetadataModules) {
        return metadataIds[key];
    }
    
    // Grid functions
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

    private processData(dataGrid:any) {
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
            dataColumns
        }
    }

    private getColumnsForGrid(data: any) {
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



    private getDataForGrid(dataGrid: any, columns: MetadataGridColumnModel[], keys: MetadataGridColumnModel[]) {
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

    private getDataForGridColumns(data:any[], columns: MetadataGridColumnModel[]) {
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


    // Modal functions

    // Grid functions
    getDataFromCatalogModal(catalogId: number, inputKeys: MetadataGridRowDataModel[]) {
        let keys: MetadataValueModal[] = [];
        inputKeys.forEach(key => {
            keys.push({
                fieldId: key.fieldId,
                valueQl: key.valueQl
            })
        });

        return this.graphService.execQuery(
            metadataQueries.GET_DATA_FROM_MODAL,
            {
                token: this.localService.getValue( 'token' ),
                table: catalogId.toString(),
                keys
            },
            "no-cache"
        ).pipe(
            map(result => ( this.processDataModal(result.data['getData'], catalogId, keys)))
        )
    }

    processDataModal(datamodal:any, catalogId: number, keys: MetadataValueModal[]) : MetadataModalModel {
         console.log('data modal ', datamodal);

        console.log('panelDataJson',datamodal, JSON.parse(datamodal.propertiesUIJson));
        return {
            catalogId,
            dataTabs: this.getDataTabs(JSON.parse(datamodal.panelDataJson)),
            isNew: false,
            keys,
            table: '',
            levels: JSON.parse(datamodal.propertiesUIJson)
        };
        
    }

    getDataTabs(datamodal:any) : MetadataTabModel[] {
        let tabs: MetadataTabModel[] = [];

        datamodal.Tabs.forEach(tab => {
            tabs.push({
                id: `${StringTools.generateNewRandomString(4)}-${StringTools.generateNewRandomString(3)}`,
                description: tab.Description,
                text: tab.Text,
                tooltip: tab.ToolTip,
                fields: this.getFields(tab.PropertiesUI),
                selected: false
            })
        });
        return tabs;
    }

    getFields(tabFields: string) : MetadataFieldModel[] {
        let returnFields: MetadataFieldModel[] = [];
        if(tabFields.length === 0) return [];
        
        let tabDefinitions: any[] = JSON.parse(tabFields);

        tabDefinitions.forEach(field => {
            returnFields.push({
                controlType: field.ControlType,
                description: field.Description,
                enabled: field.Enabled,
                id: field.Id,
                labelText: field.LabelDefinition.Text,
                required: field.Required,
                text: field.Text,
                toUpper: field.ToUpper,
                tooltip: field.ToolTip,
                validation: field.Validation,
                value: field.Value,
                virtual: field.Virtual,
                visible: field.Visible,
                values: field.Values ? this.getValuesField(field.Values) : []
            })
        });

        return returnFields;

    }

    getValuesField(values: any[]): SelectListItem[] {
        let selectItems: SelectListItem[] = [];
        values.forEach(value => {
            selectItems.push({
                value: value.Value,
                description: value.Description
            })
        });
        return selectItems;
    }



    
}