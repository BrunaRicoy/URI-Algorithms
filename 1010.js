var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var linha1 = lines[0].split(' ');
var linha2 = lines[1].split(' ');

var a = parseInt(linha1[0]);
var b = parseInt(linha1[1]);
var c = parseFloat(linha1[2]).toFixed(2);

var d = parseInt(linha2[0]);
var e = parseInt(linha2[1]);
var f = parseFloat(linha2[2]).toFixed(2);

var g = (b*c) + (e*f);
console.log("VALOR A PAGAR: R$ "+ g.toFixed(2));