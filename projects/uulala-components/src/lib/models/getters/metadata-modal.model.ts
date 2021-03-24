import { MetadataValueModal } from "./metadata-value.model";
import { MetadataTabModel } from "./metadata-tab.model";
import { MetadataLevelInfoModel } from "./metadata-level.model";


export interface MetadataModalModel {
    catalogId: number;
    table: string;
    keys: MetadataValueModal[];
    dataTabs: MetadataTabModel[];
    isNew: boolean;
    levels: MetadataLevelInfoModel[]
}