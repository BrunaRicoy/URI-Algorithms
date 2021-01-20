var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split(' ');

let cod = parseInt(lines[0]);
let quant = parseInt(lines[1]);

if(cod == 1) {
    console.log("Total: R$ " + (quant * 4.00).toFixed(2));

    if(cod == 2) {
        console.log("Total: R$ " + (quant * 4.50).toFixed(2));  
    }
    if(cod == 3) {
        console.log("Total: R$ " + (quant * 5.00).toFixed(2));  
    }
    if(cod == 4) {
        console.log("Total: R$ " + (quant * 2.00).toFixed(2));
    }
    if(cod == 5) {
        console.log("Total: R$ " + (quant * 1.50).toFixed(2));
    }
}