import { AccountModel } from './account.model';

export interface ProfileModel {
  userID:string;
  id: string;
  status: number;
  name: string;
  accountId: string;
  roleId: string;
  accounts: AccountModel;
}