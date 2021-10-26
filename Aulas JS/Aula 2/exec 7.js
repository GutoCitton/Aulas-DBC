// 3) Faça um programa onde o usuário possa escolher qual a tabuada que se deseja ver. Exiba (console) a tabuada desse número de 1 a 10;

var tabuada = prompt("Digite um número de 1 - 10")

var tabuada1 = 0


for(let i = 0; i <= 10; i++) {
    tabuada1 = tabuada
    result = tabuada * i
    console.log(`Tabuada do ${tabuada1} x ${i} = ${result}`)
}