var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines[0]);

const time = [h, m, s];

var h = parseInt(n / 3600);
var m = parseInt((n % 3600) / 60);
var s = parseInt((n % 3600) % 60);

console.log(h + ":" + m + ":" + s);