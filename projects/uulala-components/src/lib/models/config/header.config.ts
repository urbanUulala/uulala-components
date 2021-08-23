import { ColumnGridType } from "../../types/columngrid.type";


export interface HeaderGridModel {
    text: string;
    width: number;
    typeColumn: ColumnGridType;
    hideColumn?: boolean;
}