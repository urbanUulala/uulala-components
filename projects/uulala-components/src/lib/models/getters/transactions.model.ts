import { NotesModel } from "./notes.model";

export interface TransactionsModel {
  id: number;
	accountId: string;
	transactionDate: Date;
	type:number;
	amount:number;
	finalBalance:number;
	currencyCode:string;
	exchageRate:number;
	createdDate:Date;
	note: NotesModel;
}
