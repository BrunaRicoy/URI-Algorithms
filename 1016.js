var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var D = parseInt(lines[0]);
var X = 60;
var Y = 90;
var r = (60*D)/30;

console.log(r + " minutos");