
export class ObjectTools {

  static isEmptyOrNull(obj: any) {
    return JSON.stringify(obj) === '{}' || obj === undefined;
  }


}
