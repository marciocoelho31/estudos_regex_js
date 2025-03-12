const fs = require('fs');
const bancoCsv = 'database.csv';
const banco = fs.readFileSync(bancoCsv, 'utf8');

// grupos de captura
const patternNome = /^([A-Za-zÀ-ÿ]+)(?:\s([A-Za-zÀ-ÿ]+))+/gm;
// circunflexo (^) para indicar que a linha deve começar com o padrão
// ?: para indicar que o grupo não deve ser capturado
const matchNome = banco.match(patternNome);
console.log(matchNome);