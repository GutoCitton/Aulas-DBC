// 1) Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
//     Esse funcionário foi contratado em 2016, com salário inicial de R$1000,00;
//     A cada ano o funcionário recebe um aumento de 1,5% sobre seu salário inicial;
//     A partir de 2018, os aumentos salariais sempre passaram a ser o dobro do percentual do ano anterior
//     Faça um programa que determine o salário atual desse funcionário (2021);


var salarioInicial = 1000;

var porCento = 1.5


var salario = 1000;


for (let year = 2016; year <= 2021; year++) {
    if (year < 2018){
        salario = salario + (salario * (porCento / 100))
        console.log(`O salário do ano ${year} é de R$${salario}`)
        porCento = porCento * 2
        console.log(`A porcentagem de aumento é de: ${porCento}`)
    }
    else if(year <= 2021) {
        salario = salario + (salario * (porCento / 100))
        console.log(`O salário do ano ${year} é de R$${salario}`)
        porCento = porCento * 2
        console.log(`A porcentagem de aumento é de: ${porCento}`)
    }
}


