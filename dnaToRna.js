export default (dna) => {

let rna = "";
for (let i = 0; i < dna.length; i += 1) {
if (dna.length === 0) {
return '';
} else if (dna[i] === "G") {
rna += "C";
} else if (dna[i] === "C") {
rna += "G";
} else if (dna[i] === "T") {
rna += "A";
} else if (dna[i] === "A") {
rna += "U";
} else {
return null;
}
}
return rna;
}