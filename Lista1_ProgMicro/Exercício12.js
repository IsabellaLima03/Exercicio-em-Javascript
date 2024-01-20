//Crie um algoritmo para calcular a área de pintura de um cômodo

const readline = require('readline-sync');

var altura = readline.question('Informe a altura da parede ');
var comprimento = readline.question('Informe o comprimento da parede ');


var area = (parseFloat(altura) * parseFloat(comprimento)) * 4;

console.log(`A area de pintura do comodo é ${area}`);