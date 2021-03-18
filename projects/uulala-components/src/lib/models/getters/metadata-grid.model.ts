import { MetadataGridColumnModel } from "./metadata-grid-column.model";
import { MetadataGridRowModel } from "./metadata-grid-row.model";


export interface MetadataGridModel {
    tableId: number;
    table: string;
    columns: MetadataGridColumnModel[];
    dataColumns: MetadataGridRowModel[];
}