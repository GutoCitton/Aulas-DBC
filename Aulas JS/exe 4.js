// 4) Crie um programa que recebe dois números e uma operação desejada (operações válidas: '+', '-', '*', '/') e adicione também uma validação para caso a operação
//    escolhida não seja uma das operações válidas OU se um dos números digitados seja um valor inválido também;
//    Caso a validação encontre um erro mostre um alerta informando o usuário;
//    Obs: Lembrando também que não é possível dividir por zero (ou seja, tratem isso também);

var n1 = prompt("Digite um número");
var n2 = prompt("Digite outro número");


var number1 = Number.parseInt(n1);
var number2 = Number.parseInt(n2);

if (number1.toString() != "NaN" && number2.toString() != "NaN" && typeof number1 === "number" && typeof number2 === "number"){
    var operation = prompt("Escolha uma das operações: soma, subtração, multiplicação e divisão");
        if (operation === "soma") {
            alert(number1 + number2);
        }
        else if (operation === "subtração" || operation === "subtraçao") {
            alert(number1 - number2);
        }
        else if (operation === "multiplicação" || operation === "multiplicaçao") {
            alert(number1 * number2);
        }
        else if (operation === "divisão" || operation === "divisao") {
            if (number1 != 0 && number2 != 0) {
                alert(number1 / number2);
            } else {
                alert("Não é possível dividir por zero");
            }
        }
}else {
    alert("Você digitou algo inválido!")
}

