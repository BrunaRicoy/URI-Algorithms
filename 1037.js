var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var X = parseFloat(lines[0]);


        if((X > 25 ) && (X <= 50))  { 
            console.log( "Intervalo (25,50]" );
        }
           else if((X >= 0 ) && (X <= 25)) {
                console.log( "Intervalo [0,25]" );
        }
               else if((X > 75 ) && (X <= 100)) {
                    console.log( "Intervalo (75,100]" );
        }
                   else if((X > 50) && (X <= 75)) {
                        console.log( "Intervalo (50,75]" );
                    }
        else{
            console.log( "Fora de intervalo" );
        }