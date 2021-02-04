export class DeviceModel {
  constructor(
    public id           : string,
    public ipAddress    : string,
    public deviceName   : string,
    public status       : string,
    public product      : number,
    public browserId    : string,
    public register     : string,
    public browserName  : string = '',
    public soName       : string = '',
    public productName      : string = ''
  ){}
}
