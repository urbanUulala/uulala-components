import { MetadataGridColumnModel } from "./metadata-grid-column.model";
import { MetadataTabModel } from "./metadata-tab.model";


export interface MetadataModalModel {
    catalogId: number;
    table: string;
    keys: MetadataGridColumnModel[];
    dataTabs: MetadataTabModel[];
    isNew: boolean;
}