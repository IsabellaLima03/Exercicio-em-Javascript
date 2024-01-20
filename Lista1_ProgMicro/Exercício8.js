//O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.

const readline = require('readline-sync');

var custofabrica = readline.question('Digite qual o custo de fabrica ');

var custofinal = (parseFloat(custofabrica) * 0,28) + (parseFloat(custofabrica) * 0,45) + parseFloat(custofabrica);

console.log(`O custo final de um carro novo é ${custofinal}`);