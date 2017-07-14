export default class Transcriptor {
  toRna(dna) {
    if(dna.match(/[XU]/g)) throw new Error('Invalid input DNA.');
    return dna.replace(/[GCTA]/g, (character) => {
      const transcribe = { 'G':'C', 'C':'G', 'T':'A', 'A':'U'};
      return transcribe[character];
    });
  }
}
