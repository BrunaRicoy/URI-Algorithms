var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split(' ');

let A = parseInt(lines[0]);
let B = parseInt(lines[1]);

        if (A > B) {
            console.log("O JOGO DUROU " + (24 - A + B) + " HORA(S)");
        }else if (A < B) {
            console.log("O JOGO DUROU " + (B - A) + " HORA(S)");
        }else if (A == B) {
            console.log("O JOGO DUROU 24 HORA(S)");
        }  