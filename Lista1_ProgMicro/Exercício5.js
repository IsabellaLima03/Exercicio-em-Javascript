//Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.

const readline = require('readline-sync');

var anos = readline.question('Informe quantos anos voce tem ');
var meses = readline.question('Informe quantos meses se passaram desde seu ultimo aniversario ');
var dias = readline.question('Informe quantos dias se passaram desde seu ultimo mesversario ');

var idade = (parseFloat(anos) * 365) + (parseFloat(meses) * 30) + parseFloat(dias);

console.log(`Sua idade em dias é: ${idade}`);