//Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. 
//Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

const readline = require('readline-sync');

var eleitores = readline.question('Informe o numero de eleitores do municipio ');
var brancos = readline.question('Informe o numero de votos em branco que tiveram no municipio ');
var nulos = readline.question('Informe o numero de votos nulos que tiveram no municipio ');

var validos = parseFloat(eleitores) - (parseFloat(brancos) + parseFloat(nulos));

var perc1 = (parseFloat(brancos) /  parseFloat(eleitores)) * 100 ;
var perc2 = (parseFloat(nulos) / parseFloat(eleitores)) * 100 ;
var perc3 = (parseFloat(validos) / parseFloat(eleitores)) * 100 ;

console.log(`O total de votos no municipio foram ${eleitores}, assim sendo ${perc1}% de votos brancos, ${perc2}% de votos nulos, e ${perc3}% de votos validos`);