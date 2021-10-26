// 2) Crie um programa que, através de laços de repetição, percorra uma determinada lista com os seguintes números: [1, 2, 7, 10, 18]
//    e imprima no console a soma de todos os elementos, neste caso seria 38;

var lista = [1, 2, 7, 10, 18];
var resultado = 0;

for(let i = 0; i < lista.length; i++){
    // resultado = lista[i] + resultado;
    resultado += lista[i];
    console.log(resultado);
}