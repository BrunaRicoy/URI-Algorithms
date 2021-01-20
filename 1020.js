var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let id = parseInt(lines[0]);

const time = [d, m, a];

var a = parseInt(id / 365);
var m = parseInt((id % 365) / 30);
var d = parseInt((id % 365) % 30);
 
console.log(a + " ano(s)");
console.log(m + " mes(es)");
console.log(d + " dia(s)");