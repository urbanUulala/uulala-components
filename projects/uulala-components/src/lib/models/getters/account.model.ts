import { AddressModel } from './address.model';
import { kycModel } from './kyc.model';
import { bankInformationModel } from './bankInformation.model';
export class AccountModel {
  constructor(
    public id: string,
    public term: boolean,
    public status: number,
    public firstName: string,
    public avatarImage: string,
    public lastName: string,
    public secondLastName: string,
    public phoneNumber: string,
    public middleName: string,
    public email: string,
    public clientId: string,
    public currency: string,
    public gender: string,
    public birthday: string,
    public alias: string,
    public nationalId: string,
    public otherNationalId: string,
    public countryCode: string,
    public externalId: string,
    public customerId: string,
    public address: AddressModel,
    public kyc: kycModel,
    public bankInformation: bankInformationModel
  ){}
}
 