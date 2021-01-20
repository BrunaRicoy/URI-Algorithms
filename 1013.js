var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var numeros = lines[0].split(" ");

var largest = parseInt(numeros[0]);

for (let index = 0; index < numeros.length; index++) {
  if(parseInt(numeros[index]) > largest) {
    largest = parseInt(numeros[index])
  }
}

console.log(largest + " eh o maior");

//console.log(numeros.length);
/*s
var age = 17;
if(age > 17) {
    console.log("Apto a dirigir");
}else if (age === 17) {
    console.log("falta um ano!!");
}else {
    console.log("não apto a dirigir");
}*/