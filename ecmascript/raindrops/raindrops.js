export default class Raindrops {
  convert(number) {
    this.number = number;
    this.result = '';
    if (this.number % 3 === 0) this.result =+ 'Pling';
    if (this.number % 5 === 0) this.result =+ 'Plang';
    if (this.number % 3 === 0) this.result =+ 'Plong';
    return this.result ? this.result : this.number.toString();
  }
}
