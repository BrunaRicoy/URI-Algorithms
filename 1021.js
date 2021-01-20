var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let x = parseFloat(lines[0]).toFixed(2);

console.log("NOTAS:");

const notas = [100, 50, 20, 10, 5, 2];

for (let nota of notas) {
    let quan = parseInt(x / nota);
    console.log(parseInt(`${quan}`) + " notas(s) de R$ " + parseFloat(`${nota}`).toFixed(2));
    x = x % nota;
}

console.log("MOEDAS:");

const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

for (let moeda of moedas) {
    let quam = parseInt(x / moeda);
    console.log(`${quam}` + " moeda(s) de R$ " + parseFloat(`${moeda}`).toFixed(2));
    x = x % moeda + 0.00001;
}