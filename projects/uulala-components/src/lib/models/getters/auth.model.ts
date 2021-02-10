export class Auth {
  constructor(
    public token:string,
    public uuid: string,
    public user: string,
    public password: string,
    public locked: boolean,
    public timeOut?: number
  ){}
}
