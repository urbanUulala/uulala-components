import { BreadItemModel } from "../config/breaditem.model";
import { TextConfigModel } from "../config/textconfig.model";


export interface BreadcrumConfigModel {
    tittle: TextConfigModel[];
    breadItems: BreadItemModel[];
}