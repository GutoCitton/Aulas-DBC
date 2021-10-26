// 6) Leia 5 valores numéricos do usuário e calcule seu somatório utilizando o laço Do While;

var num = 0;
var i = 1;
var result = 0;

do{
    num = Number.parseInt(prompt(`Digite o ${i}º número da soma`));

    if(num.toString() !== 'NaN'){
        result += num;
        i++
    } else {
        console.log("Não é um número")
    }
    


    } while(i <= 5);
    console.log(result);
