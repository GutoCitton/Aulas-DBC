// 3) Crie função de soma que recebe como parâmetro 2 números (imprime no console a soma deles) e uma função de Callback que seja 
//    chamada caso algum dos números informados seja inválido.

//    Esta função de Callback exibe somente a msg no console 'Algum número digitado foi inválido';


function soma(n1, n2, callback) {
    var floatN1 = Number(n1)
    var floatN2 = Number(n2)
    if(floatN1.toString() !== 'NaN' && floatN2.toString() !== 'NaN' ) {
        return floatN1 + floatN2
    } else {
        return callback()
    }
}

