var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split(' ');

let AHI = parseInt(lines[0]);
let AMI = parseInt(lines[1]);
let BHF = parseInt(lines[2]);
let BMF = parseInt(lines[3]);
let totalH = BHF - AHI;
let totalM = BMF - AMI;

if ((totalH <= 0) && (totalM <= 0)) {
    totalH += 24;
}

if (totalM < 0) {
    totalM += 60;
    totalH--;
}

console.log("O JOGO DUROU "+ totalH + " HORA(S) E " + totalM + " MINUTO(S)");