const searchGeneInSequence = function (gene, dnaSequence) {
  const sequenceLength = dnaSequence.length;
  const geneLength = gene.length;
  let isFound = false;
  let sequenceIndex = 0;

  while (sequenceIndex < sequenceLength - geneLength + 1 && isFound == false) {
    let geneIndex = 0;
    while (geneIndex < geneLength && gene[geneIndex] == dnaSequence[sequenceIndex + geneIndex]) {
      geneIndex += 1;
    }
    if (geneIndex == geneLength) {
      isFound = true;
    }
    sequenceIndex += 1;
  }
  return isFound;
};

const dnaSequence = 'ACGTACGTACGTACGT';
const gene = 'ACGTACGT';
const isFound = searchGeneInSequence(gene, dnaSequence);
console.log(isFound); // true
