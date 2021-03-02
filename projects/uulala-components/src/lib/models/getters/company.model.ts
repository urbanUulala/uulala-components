import { BalanceModel } from "./balance.model";

export interface CompanyModel {
  number: number;
  name: string;
  rfc?: string;
  address1?: string;
  address2?: string;
  postalCode?: string;
  state?: string;
  country?: string;
  phone?: string;
  pathLogo: string;
  creditableSubsidyPercentage?: string;
  employerRegistry?: string;
  nameLegalRepresentative1?: string;
  nameLegalRepresentative2?: string;
  isEmployerInBranch?: string;
  countryNumber?: string;
  aditionalDescription? : string;
  totalBranch: number;
  totalArea: number;
  totalDepto: number;
  totalEmployess: number;
  totalActiveEmployess: number;
  totalDesactiveEmployess: number;
  totalPayrollTypes: number;
  totalPayrollPeriods: number;
  idUulalaGroup: string;
  balanza: BalanceModel;
}
