// 1) Crie uma função que recebe como parâmetro um caracter e um array de caracteres e que remova todas as ocorrências daquele caracter no array; 
// ex. funcaoRemoveCaracterDoTexto('a', [ 'c', 'a', 'texto', 'a' ] ) ===> retorna o array [ 'c', 'texto' ] (removeu todos 'A');



function removerCaracter (caracter, array) {
    var arrayCopy = [...array];
    for (let i = 0; i <= arrayCopy.length; i++){
        if(caracter === arrayCopy[i]) {
            arrayCopy.splice(i, 1);
        }
    }
    return arrayCopy;
}
