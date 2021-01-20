var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var linha = lines [0].split(" ");

var A = parseFloat(linha[0]);
var B = parseFloat(linha[1]);
var C = parseFloat(linha[2]);
var pI = 3.14159;

var d = (A*C)/2;
var e = (Math.pow(C,2))*pI;
var f = ((A+B) * C)/2;
var g = Math.pow(B,2);
var h = A*B;
console.log("TRIANGULO: "+ d.toFixed(3));
console.log("CIRCULO: "+ e.toFixed(3));
console.log("TRAPEZIO: "+ f.toFixed(3));
console.log("QUADRADO: "+ g.toFixed(3));
console.log("RETANGULO: "+ h.toFixed(3));