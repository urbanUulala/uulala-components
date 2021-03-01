import { BalanceModel } from "./balance.model";

export interface CompanyModel {
  number: string;
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
  totalBranch: string;
  totalArea: string;
  totalDepto: string;
  totalEmployess: string;
  totalActiveEmployess: string;
  totalDesactiveEmployess: string;
  totalPayrollTypes: string;
  totalPayrollPeriods: string;
  idUulalaGroup: string;
  balanza: BalanceModel;
}
