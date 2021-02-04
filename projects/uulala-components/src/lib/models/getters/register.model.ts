export class RegisterModel {
  constructor(
    public email: string,
    public phoneNumber: string,
    public lada: string,
    public groupId: string,
    public password?: string,
    public firstName?: string,
    public lastName?: string,
    public secondLastName?: string,
    public birthday?: string,
    public otherNationalId?: string,
    public nationalId?: string,
    public ssn?: string,
    public accountId?: string
  ) {

  }
}
