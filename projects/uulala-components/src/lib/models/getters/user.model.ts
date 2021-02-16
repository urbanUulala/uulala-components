import { ProfileModel } from './profile.model';

export class UserModel {
  constructor(
    public id:string,
    public email: string,
    public phoneNumber: string,
    public lada: string,
    public usersProfile: ProfileModel,
  ){}
}
