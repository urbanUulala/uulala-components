import { NotesModel } from "./notes.model";

export interface AccountsTransactionTokenModel {
    id: number;
    accountId: string;
    transactionDate: string;
    type: number;
    amount: number;
    finalBalance: number;
    currencyCode: string;
    exchageRate: number;
    createdDate: Date;
    note: NotesModel;
}