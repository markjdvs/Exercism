export default class Cipher {
  constructor() {
    this.key = 'dddddddddd';
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
  }

  encode(string) {
    const encodedString = [];
    for (let i = 0; i < string.length; i++) {
      const index = this.alphabet.indexOf(string[i]);
      encodedString[i] = this.alphabet[index + 3];
    }
    return encodedString.join('');
  }
}
