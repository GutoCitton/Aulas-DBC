// 3) Faça um programa onde o usuário possa escolher qual a tabuada que se deseja ver. Exiba (console) a tabuada desse número de 1 a 10;

var tabuada = Number.parseInt(prompt("Digite um número de 1 - 10"))

var tabuada1 = 0

if (tabuada >= 1 && tabuada <= 10 && tabuada !== NaN){
    for(let i = 0; i <= 10; i++) {
        tabuada1 = tabuada
        result = tabuada * i
        // Não sei por que funciona, mas na multiplicação, ele pega o number e não a string.
        console.log(`Tabuada do ${tabuada1} x ${i} = ${result}`)
    }
}
else {
    console.log('Valor inválido')
}
