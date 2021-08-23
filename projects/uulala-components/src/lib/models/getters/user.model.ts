
import { LicensesModel } from './licences.model';
import { ClientModel } from './client.model';
import { ProfileModel } from './profile.model';
import { LicenseModel } from 'uulala-components/projects/uulala-components/src/lib/models/getters/license.model';
import { BatchedTransaction } from 'uulala-components/projects/uulala-components/src/lib/models/getters/batchedtransactions.model';

export interface UserModel {
  id:string;
  email: string;
  phoneNumber: string;
  lada: string;
  usersProfile: ProfileModel;
  clients: ClientModel;
  licenses: LicensesModel[];
  licensesReferences: LicenseModel[];
  bachedTransaction?: BatchedTransaction[];
}
