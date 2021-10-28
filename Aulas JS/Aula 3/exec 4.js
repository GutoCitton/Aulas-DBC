// 1) Crie uma função que recebe como parâmetro um caracter e um array de caracteres e que remova todas as ocorrências daquele caracter no array; 
// ex. funcaoRemoveCaracterDoTexto('a', [ 'c', 'a', 'texto', 'a' ] ) ===> retorna o array [ 'c', 'texto' ] (removeu todos 'A');



function removerCaracter (caracter, array) {
    var arrayResultado = [];
    for (let i = 0; i < array.length; i++){
        if(caracter.toLowerCase() !== array[i].toLowerCase()) {
            arrayResultado.push(array[i]);
        }
    }
    return arrayResultado;
}
