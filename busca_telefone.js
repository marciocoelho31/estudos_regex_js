const fs = require('fs');
const bancoCsv = 'database.csv';
const banco = fs.readFileSync(bancoCsv, 'utf8');

//const regexTelefone = /\(\d+\)\s\d+-\d+/g;
const regexTelefone = /\(\d{2}\)\s\d{4,5}-\d{4}/g;
// \d = digit
// \s = space
// + = one or more
// () = group
// g = global

const matchTelefone = banco.match(regexTelefone);
console.log(matchTelefone);

const patternCelular = /\(\d{2}\)\s\d{5}-\d{4}/g;
const matchCelular = banco.match(patternCelular);
console.log(matchCelular);