import { ClientAccountModel } from "./clientAccount.model";
import { TransactionsModel } from './transactions.model';


export interface ClientModel {
    id: string;
    externalId: string;
    status: string;
    activationDate: string;
    officeId: string;
    firstName: string;
    middleName: string;
    lastName: string;
    fullName: string;
    displayName: string;
    mobileNo: string;
    dateOfBirth: string;
    emailAddress: string;
    statusPayroll : string;
    account: ClientAccountModel;
    transactions: TransactionsModel; 
}