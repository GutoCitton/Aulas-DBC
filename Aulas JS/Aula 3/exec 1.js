// 1) Crie uma função que recebe como parâmetro uma lista com os valores [1, 'Olá', undefined, 99999, 'Texto qualquer']
//    e essa função imprima no console o valor de cada elemento da lista;

var array = [1, 'Olá', undefined, 999999, 'Texto qualquer'];

function lista(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}