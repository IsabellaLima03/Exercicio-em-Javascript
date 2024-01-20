//Crie um algoritmo para calcular o comprimento da circunferência

const readline = require('readline-sync');

var raio = readline.question('Informe o raio da circunferencia ');

var comprimento = 2 * Math.PI * parseFloat(raio);

console.log(`O comprimento da circunferencia é ${comprimento}`);