var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split(' ');

let A = parseFloat(lines[0]).toFixed(1);
let B = parseFloat(lines[1]).toFixed(1);
let C = parseFloat(lines[2]).toFixed(1);
let coeficiente1;
let coeficiente2;

let delta = (B * B) - 4 * A * C;

if( delta < 0) {
      
    console.log("Impossivel calcular");
    
}else
    coeficiente1 = (- B + Math.sqrt(delta)) / (2 * A).toFixed(5);
    coeficiente2 = (- B + Math.sqrt(delta)) / (2 * A).toFixed(5);
    console.log("R1 = " + %coeficiente1).tofixed(5);
    console.log("R2 = " + %coeficiente2).toFixed(5);
}