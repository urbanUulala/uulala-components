import { AccountModel } from "./account.model";
import { CompanyModel } from "./company.model";

export interface xtsUserModel {
  companyNumber?: string;
  uuid?: string;
  number?: string;
  name?: string;
  abreviattion?: string;
  privilege?: string;
  isRoot?: string;
  registrationDate?: string;
  status?: string;
  payrollType?: string;
  autorizeExceptions: string;
  email?: string;
  collectionToCaptureExceptions?: string;
  collectionToCaptureScheduledExceptions?: string;
  collectionsToCaptureLoans?: string;
  employeesFilter?: string;
  isValidateRfcIMSS?: string;
  account?: AccountModel;
  company: CompanyModel;
  companies?: CompanyModel[];
}
