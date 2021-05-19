
import { BalanceModel } from "./balance.model";
import { TransactionsModel } from "./transactions.model";


export interface ClientAccountModel {
    id:string;
    accountNo:string;
    externalId:string;
    clientId:string;
    groupId:string;
    currencyCode:string;
    balance: BalanceModel;
    transactions: TransactionsModel;
}