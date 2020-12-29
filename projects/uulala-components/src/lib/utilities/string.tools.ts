import { Md5 } from 'ts-md5/dist/md5';
import { NumberTools } from './number.tools';

export class StringTools {

  static generateNewRandomString(length: number) {
    let result: string = '';
    let characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength: number = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  static generateNewIdString() {
    let length = NumberTools.generateRandomNumber(NumberTools.generateRandomNumber(100000))
    return StringTools.generateNewRandomString(length);
  }

  static generateNewHashString() {
    return Md5.hashStr(StringTools.generateNewIdString()).toString()
  }
}
