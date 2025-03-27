const recherche = function (gene, seq_adn) {
  const n = seq_adn.length;
  const g = gene.length;
  let trouve = false;
  let i = 0;

  while (i < n - g + 1 && trouve == false) {
    let j = 0;
    while (j < g && gene[j] == seq_adn[i + j]) {
      j += 1;
    }
    if (j == g) {
      trouve = true;
    }
    i += 1;
  }
  return trouve;
};

console.log(recherche("AATC", "GTACAAATCTTGCC"));

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("click");

  // Get the selected gene and entered DNA sequence
  let selectedGene = document.getElementById("gene").value;
  let dnaSequence = document.getElementById("sequence").value;

  // Check if the gene is included in the DNA sequence
  let isGeneFound = recherche(selectedGene, dnaSequence);

  console.log(isGeneFound);

  // Display the result
  document.getElementById("result").innerHTML = isGeneFound
    ? `The gene "${selectedGene}" is found in the sequence.`
    : `The gene "${selectedGene}" is NOT found in the sequence.`;
});

// Initialize the button state on page load
document.getElementById("submit").disabled = false;

document.getElementById("sequence").addEventListener("input", function () {
  let dnaSequence = document.getElementById("sequence").value;
  document.getElementById("submit").disabled = dnaSequence.trim() === "";
});

document.getElementById("show-location").addEventListener("click", function () {
  // Get the selected gene and entered DNA sequence
  let selectedGene = document.getElementById("gene").value;
  let dnaSequence = document.getElementById("sequence").value;

  // Find the index of the gene in the DNA sequence
  let startIndex = dnaSequence.indexOf(selectedGene);

  if (startIndex !== -1) {
    // Highlight the found sequence in bold
    let highlightedSequence =
      dnaSequence.substring(0, startIndex) +
      `<span>${dnaSequence.substring(
        startIndex,
        startIndex + selectedGene.length
      )}</span>` +
      dnaSequence.substring(startIndex + selectedGene.length);

    // Display the highlighted sequence in the #location div
    document.getElementById(
      "location"
    ).innerHTML = `Sequence found: ${highlightedSequence}`;
  } else {
    // If the sequence is not found, display a message
    document.getElementById("location").innerHTML =
      "The sequence was not found in the DNA.";
  }
});
