var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let v = parseInt(lines[0]);

const notas = [100, 50, 20, 10, 5, 2, 1];

console.log(v);

for (let nota of notas) {
    let quan = parseInt(v / nota);
    console.log(quan + " nota(s) de R$ " + nota + ",00");
    v = v % nota;
}