import { Md5 } from 'ts-md5/dist/md5';
import { NumberTools } from './number.tools';

export class StringTools {

  static generateNewRandomString(length: number) : string {
    let result: string = '';
    let characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength: number = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  static generateNewIdString() : string {
    let length = NumberTools.generateRandomNumber(NumberTools.generateRandomNumber(100000))
    return StringTools.generateNewRandomString(length);
  }

  static generateNewHashString() : string {
    return Md5.hashStr(StringTools.generateNewIdString()).toString()
  }

  static getGraphErrorMessage(error: string) : string{
    let errorString: string = error.replace('GraphQL.ExecutionError: ', '');
    errorString = errorString.substring(0, errorString.length - 1);

    let errors: string[] = errorString.split('|');

    if(errors.length !== 0) return errors[0];
    else return '';
  }

  static getGraphErrorMessageList(error: string) : string[] {
    let errorString: string = error.replace('GraphQL.ExecutionError: ', '');
    errorString = errorString.substring(0, errorString.length - 1);

    return errorString.split('|');
  }

  static formatDateCard(date:string, separator:string = '/') {
    let dateLeft: string = date.split('/')[0];
    let dateRigth: string = date.split('/')[1];
    // console.log('data in date format', dateLeft, dateRigth);
    return `${this.formatPartialDate(dateLeft)}${separator}${this.formatPartialDate(dateRigth)}`;
  }

  private static formatPartialDate(date: string) {
    let output: string;
    switch (date.length) {
      case 1:
        output = `0${date}`
        break;
      case 2:
        output = date;
        break;
      case 3:
        output = `${date.substring(1, 3)}`
      case 4:
        output = `${date.substring(2, 4)}`
        break;
      default:
        output = '00';
        break;
    }

    return output;
  }
}

