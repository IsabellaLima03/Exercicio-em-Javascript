// Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo.

const readline = require('readline-sync');

var base = readline.question('Informe o valor da base do retangulo ');
var altura = readline.question('Informe o valor da altura do retangulo ');

var area = (parseFloat(base) * parseFloat(altura));

console.log(`A Área do retângulo é ${area}`);