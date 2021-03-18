import { SelectListItem } from "../configurations";


export interface MetadataFieldModel {
    controlType: number;
    description: string;
    enabled: boolean;
    id: number;
    labelText: string;
    required: boolean;
    text: string;
    toUpper: boolean;
    tooltip: string;
    validation: string;
    value: string;
    virtual: boolean;
    visible: boolean;
    values?: SelectListItem[]
}