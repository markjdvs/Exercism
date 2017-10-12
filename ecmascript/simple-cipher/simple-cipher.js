export default class Cipher {
  constructor() {
    this.key = 'dddddddddd'; // define a key
    // could set lines 11 and 20 to the difference between this key and its place in the alphabet
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
  }

  encode(string) {
    const encodedString = [];
    for (let i = 0; i < string.length; i++) {
      const index = this.alphabet.indexOf(string[i]);
      // grab the index of each letter of the string to encode in the alphabet
      encodedString[i] = this.alphabet[index + 3];
      // apply the Caesar cipher i.e. difference of three as stated in readme
    }
    return encodedString.join('');
  }

  decode(encodedString) {
    const decodedString = [];
    for (let i = 0; i < encodedString.length; i++) {
      const index = this.alphabet.indexOf(encodedString[i]);
      decodedString[i] = this.alphabet[index - 3];
    }
    return decodedString.join('');
  }
}
