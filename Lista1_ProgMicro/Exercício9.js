//Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.

const readline = require('readline-sync');

var ncarrosv = readline.question('Informe quantos carros foram vendidos ');
var valorcarrosv = readline.question('Informe qual o valor total de carros vendidos ');
var salario = readline.question('Informe qual é o salario fixo ');
var vrecebidoporc = readline.question('Informe qual foi o valor recebido por carro vendido ');

var resultado = parseFloat(salario) + (parseFloat(vrecebidoporc) * parseFloat(ncarrosv)) + (parseFloat(valorcarrosv) * 0.05);

console.log(`O salario final do vendedor vai ser R$ ${resultado}`);