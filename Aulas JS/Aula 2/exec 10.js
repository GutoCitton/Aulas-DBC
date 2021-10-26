// 6) Leia 5 valores numéricos do usuário e calcule seu somatório utilizando o laço Do While;

var num = 0;
var i = 1;
var result = 0;

while (i <= 5){

    num = parseInt(prompt(`Digite o ${i}º número da soma`));

    result += num;

    i++
    }
    console.log(result);
