import { AddressModel } from './address.model';
import { kycModel } from './kyc.model';
import { bankInformationModel } from './bankInformation.model';


export interface AccountModel {
  id: string;
  term: boolean;
  status: number;
  firstName: string;
  avatarImage: string;
  lastName: string;
  secondLastName: string;
  phoneNumber: string;
  middleName: string;
  email: string;
  clientId: string;
  currency: string;
  gender: string;
  birthday: string;
  alias: string;
  nationalId: string;
  otherNationalId: string;
  countryCode: string;
  externalId: string;
  customerId: string;
  pin: string;
  address: AddressModel;
  kyc: kycModel;
  bankInformation: bankInformationModel;
  isComplete: boolean;
}

 