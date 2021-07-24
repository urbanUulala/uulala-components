
import { LicencesModel } from './licences.model';
import { ClientModel } from './client.model';
import { ProfileModel } from './profile.model';

export interface UserModel {
  id:string;
  email: string;
  phoneNumber: string;
  lada: string;
  usersProfile: ProfileModel;
  clients: ClientModel;
  licenses: LicencesModel[];
}
