import { AccountModel } from './account.model';

export class ProfileModel {
  constructor(
    public userID:string,
    public id: string,
    public status: number,
    public name: string,
    public accountId: string,
    public roleId: string,
    public accounts: AccountModel,
){}
}