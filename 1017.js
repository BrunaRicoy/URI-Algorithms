var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var t = parseInt(lines[0]);
var v = parseInt(lines[1]);
var c = 12;
var rr = t*v/ c;

console.log(rr.toFixed(3));