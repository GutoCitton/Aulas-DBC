// 2) Crie uma função que receba como parâmetro um array de números e retorne um array ordenado (NÃO pode usar a função array.sort());
// ex. funcaoOrdenaArray( [4, 7, 3, 0] ) ===> retorna o array [ 0, 3, 4, 7 ] 



function ordenarValores(items) {
    var items = [ ...array ]
    for(let last = items.length - 1; last > 0; last--) {
        for (let i = 0; i < last; i++) {
            if (items[i] > items[i+1]) {
                [items[i], items[i+1]] = [items[i+1], items[i]]
            }
        }
    }
    return items;
}