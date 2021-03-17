import { SocietiesModel } from "./societies.model";

export class PayrollSession {
  constructor(
    public token:string,
    timeOut: number,
    societies: SocietiesModel
  ){}
}
