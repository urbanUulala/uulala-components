import { MetadataFieldModel } from "./metadata-field.model";


export interface MetadataTabModel {
    id: string;
    description: string;
    text: string;
    tooltip: string;
    fields: MetadataFieldModel[];
}