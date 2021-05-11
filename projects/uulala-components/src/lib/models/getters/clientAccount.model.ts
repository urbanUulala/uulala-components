import { BalanceModel } from "./balance.model";


export interface ClientAccountModel {
    id:string;
    accountNo:string;
    externalId:string;
    clientId:string;
    groupId:string;
    currencyCode:string;
    balance: BalanceModel;
}