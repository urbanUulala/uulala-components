export interface GroupModel {

  id                     : number;
  pathLogo               : string;
  name                   : string;
  status?                 : number;
  activationDate?         : Date;
  officeId?               : number;
  reference?              : string;
  cardFee?                : number;
  typeCard?               : number;
  paymentCards?           : boolean;
  crypto?                 : boolean;
  frontCard?              : string;
  backCard?               : string;
  feePcc?                 : number;
  feeVcc?                 : number;
  feeChargePcc?           : number;
  feePhysicalCard?        : number;
  feeVirtualCard?         : number;
  feeChargePhysicalCard?  : number;
  fhargePayroll?          : number;
  statusFeeEmployee?      : boolean;
  statusFeePayroll?       : boolean;
  externalId?            :string;
}
