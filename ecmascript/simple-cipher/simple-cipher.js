export default class Cipher {
  constructor(key = 'dddddddddd') {
    this.key = key; // define a key
    // could set lines 11 and 20 to the difference between this key and its place in the alphabet
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz';

    if (this.key === this.key.toUpperCase()) throw new Error('Bad key');
    if (this.key === this.key.search(/[0-9]/g)) throw new Error('Bad key');
    if (!this.key) throw new Error('Bad key');
  }

  encode(string) {
    const encodedString = [];
    for (let i = 0; i < string.length; i++) {
      const index = this.alphabet.indexOf(string[i]);
      // grab the index of each letter of the string to encode in the alphabet
      encodedString[i] = this.alphabet[index + this.alphabet.indexOf(this.key[i])];
      // apply the Caesar cipher i.e. difference of three as stated in readme
    }
    return encodedString.join('');
  }

  decode(encodedString) {
    const decodedString = [];
    for (let i = 0; i < encodedString.length; i++) {
      const index = this.alphabet.indexOf(encodedString[i]);
      decodedString[i] = this.alphabet[index - this.alphabet.indexOf(this.key[i])];
    }
    return decodedString.join('');
  }
}
