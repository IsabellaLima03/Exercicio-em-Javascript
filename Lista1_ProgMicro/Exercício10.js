//Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente em graus Celsius.

const readline = require('readline-sync');

var grausf = readline.question('Informe a temperatura em graus Fahrenheit ');

var grausc = (parseFloat(grausf) - 32) / 1.8;

console.log(`A temperatura em graus Celsius é ${grausc}`);