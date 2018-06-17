// All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.
//
// Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.
//
// Example:
//
// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
//
// Output: ["AAAAACCCCC", "CCCCCAAAAA"]

const findRepeatedDnaSequences = function(s) {
  const sequences = {};
  const repeatedSequences = {};

  for (let i = 0; i <= s.length - 10; i++) {
    const currentSequence = s.substring(i, i + 10);

    if (sequences[currentSequence]) {

      repeatedSequences[currentSequence] = 1;

    } else {

      sequences[currentSequence] = 1;

    }
  }

  return Object.keys(repeatedSequences);
};

console.log(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'));
