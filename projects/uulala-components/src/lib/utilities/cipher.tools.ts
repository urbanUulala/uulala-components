import { JSEncrypt } from 'jsencrypt';


export class CipherTools {

  static cipherRSA(publicKey:string, text: string) {
    let encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    return encrypt.encrypt(text);

  }
}
