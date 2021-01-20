var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines[0]);
var b = parseInt(lines[1]);
var c = parseFloat(lines[2]);
var mul = b*c;
console.log("NUMBER = "+ a);
console.log("SALARY = U$ "+ mul.toFixed(2));