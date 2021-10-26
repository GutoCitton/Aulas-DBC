// 4) Crie um programa que atribua à uma varíavel e imprima no console ao final da execução os textos: 
// 'Sextou' ou 'Ainda não sextou' de acordo com a resposta do usuário, códigos 1 e 2 respectivamente;


var codigoInformado = prompt('Informe 1 ou 2');

codigoInformado === '1' ? console.log('Sextou!') : codigoInformado === '2' ? console.log('Ainda não sextou') : null;