var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines[0]);
var y = parseInt(lines[1]);
var prod = x*y;
console.log("PROD = "+ prod);