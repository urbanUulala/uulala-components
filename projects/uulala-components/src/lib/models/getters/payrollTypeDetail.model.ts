import { PayrollTypeModel } from "./payrollType.model";

export interface PayrollTypeDetailModel {
  number: number;
  grouperNumber: number;
  payrolltype?: PayrollTypeModel
}
