var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines[0]);
var b = parseFloat(lines[1]);
var c = a/b

console.log(c.toFixed(3) + " km/l");