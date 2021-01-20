var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines[0]);
var b = parseFloat(lines[1]);
var c = parseFloat(lines[2]);
var por = 0.15;
var d = b + (c*por);
console.log("TOTAL = R$ "+ d.toFixed(2));