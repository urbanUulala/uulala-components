import { EmptyGridModel } from "./empty.model";
import { HeaderGridModel } from "./header.config";

export interface TransactionsConfig {
    tittle:string;
    headers: HeaderGridModel[];
    data: any[];
    empty: EmptyGridModel;
}