
import { LicensesModel } from './licences.model';
import { ClientModel } from './client.model';
import { ProfileModel } from './profile.model';
import { LicenseModel } from './license.model';
import { BatchedTransaction } from './batchedtransactions.model';

export interface UserModel {
  id:string;
  email: string;
  phoneNumber: string;
  lada: string;
  refererId?:string;
  usersProfile: ProfileModel;
  clients: ClientModel;
  licenses: LicensesModel[];
  licensesReferences: LicenseModel[];
  bachedTransaction?: BatchedTransaction[];
}
