export default class Hamming {
  compute(firstStrand, secStrand) {
    if(firstStrand.length !== secStrand.length) throw new Error('DNA strands must be of equal length.')
    let count = 0;
    for( let i = 0; i < firstStrand.length; i++ ) if( firstStrand[i] !== secStrand[i] ) count++;
    return count;
  }
}
