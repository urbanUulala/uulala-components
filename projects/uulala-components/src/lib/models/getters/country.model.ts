export class CountryModel {
  constructor(
    public countryNumber: number,
    public englishName  : string,
    public iso2         : string,
    public iso3         : string,
    public iso4217      : string,
    public currency     : string,
    public phoneCode    : string,
    public status       : boolean,
    public emoji        : string,
    public icon         : string
  ){}
}
