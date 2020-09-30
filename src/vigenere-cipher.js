const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alfabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  }

  checkParam(code,key) {
    if(!code || !key) throw new Error('Err')
  }

  getChiper(code,key,isChiper = true) {
    let message = [];
    let chiperKey = [];
    let chiper = [];
    code = code.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0, j = 0; i <code.length; i++) {
      if (!key[j]) j = 0;
      if(this.alfabet.includes(code[i])) {
        message[i] = this.alfabet.indexOf(code[i]);
        chiperKey[j] = this.alfabet.indexOf(key[j]);
        chiper[i] = isChiper ? this.alfabet[((message[i] + chiperKey[j]) % 26)] :  this.alfabet[((message[i]) - chiperKey[j] + 26 ) % 26];
        j++;
      } else {
        chiper[i] = code[i];
      }
    }
    return this.isDirect ? chiper.join('') : chiper.reverse().join('');
  }

  encrypt(code,key) {
    this.checkParam(code,key);
    let result = this.getChiper(code,key);
    return result;
  }
  decrypt(code,key) {
    this.checkParam(code,key);
    let result = this.getChiper(code,key,false);
    return result;
  }
}

module.exports = VigenereCipheringMachine;
