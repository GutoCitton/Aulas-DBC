// 3) Crie um programa que possui 3 variáveis do tipo Boolean (true / false);
//    nomes das variáveis: isFriday, isTwoGreaterThanFour e isValueEmpty;
//    Atribua à primeira variável isFriday o resultado de uma pergunta feita para o usuário "Hoje é sexta-feira?";
//    Atribua à primeira variável isTwoGreaterThanFour o resultado da comparação de "2 maior que 4" (Se necessário, pesquisar como comparar maior e menor);
   
//    Para a variável isValueEmpty você precisa solicitar uma informação para o usuário e deve ter certeza que essa informação não é nenhum dos valores a seguir:
//    null, undefined ou um texto vazio ('')


var isFriday
var isTwoGreaterThanFour = 2 > 4
// var isValueEmpty

var testeIsFriday = prompt("Hoje é sexta-feira? (sim ou não)")
var isValueEmpty = prompt("Digita algo ai")


if (testeIsFriday === "sim") {
  isFriday = true  
} else if (testeIsFriday === "não" || testeIsFriday === "nao") {
  isFriday = false
}


if (isValueEmpty.toString() !== "null" && isValueEmpty.toString() !== "undefined" && isValueEmpty !== "") {
    alert(`
  Hoje é sexta-feira: ${isFriday}
  2 é maior que 4: ${isTwoGreaterThanFour}
  O valor digitado é valido: ${isValueEmpty}  
`)
} 
else{ 
    alert("O texto digitado não é aceito.")
}

