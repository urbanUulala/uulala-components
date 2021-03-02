import { PayrollTypeDetailModel } from "./payrollTypeDetail.model";

export interface PayrollTypeModel {

  number: number;
  description: string;
  filter: string;
  periodicity: number;
  isMasterGrouper: string;
  handlesSecialSecurity: number;
  leaveSalaryZero: number;
  fiscalRegimeSat: number;
  details: PayrollTypeDetailModel
}
