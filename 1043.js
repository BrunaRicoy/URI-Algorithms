var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split(' ');

let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);
let C = parseFloat(lines[2]);

if (((A+B) > C ) && ( (B+C) > A) && ( (C+A) > B )) {
    console.log("Perimetro = " + (A + B + C).toFixed(1));
} else {
    let G = (((A + B) * C) / 2);
    console.log("Area = " + G.toFixed(1));
}