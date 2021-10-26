// 4) Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 e 100;

var soma = 0


var num = 0

for(let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        num = i
        num *= num
        console.log(num)
    }
}