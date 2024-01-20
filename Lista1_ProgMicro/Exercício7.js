//Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.

const readline = require('readline-sync');

var salario = readline.question('Informe qual o salario mensal fixo atual ');
var reajuste = readline.question('Informe qual foi o percentual de reajuste do salario ');

var salarionovo = ((parseFloat(salario) / 100) * (parseFloat(reajuste))) + parseFloat(salario);

console.log(`O salario com o reajuste é ${salarionovo}`);