//3) Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor.

const readline = require('readline-sync');

var valorteclado = readline.question("Digite um valor ");

antecessor = parseFloat(valorteclado);
antecessor--;

console.log(`O antecessor de ${valorteclado} é: ${antecessor} `);