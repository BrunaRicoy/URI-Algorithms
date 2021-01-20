var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var linhas = input.split(' ');

var N1 = parseFloat(linhas[0]).toFixed(1);
var N2 = parseFloat(linhas[1]).toFixed(1);
var N3 = parseFloat(linhas[2]).toFixed(1);
var N4 = parseFloat(linhas[3]).toFixed(1);

var soma = ((N1*2)+(N2*3)+(N3*4)+(N4*1));
var media = soma/10;

console.log("Media: " + media.toFixed(1));

if ( media >= 7.0 ){
  console.log("Aluno aprovado. ");
}
else if ( media < 5.0 ){
  console.log("Aluno reprovado. ");
}
else if ( media >= 5.0 && media <= 6.9 ){

  console.log("Aluno em exame. ");
  var notaExame = parseFloat(lines[1]).toFixed(1);
  console.log("Nota do exame: " + notaExame);

  if ( media >= 5.0 ){
    media = ( media + notaExame ) / 2;
    console.log("Aluno aprovado. ");
  }
  else {
    console.log("Aluno reprovado. ");
  }
  console.log("Media final: " + media);
}