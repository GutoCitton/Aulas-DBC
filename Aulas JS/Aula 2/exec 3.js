// 3) Crie um programa que mostre um prompt para o usuário pedindo para selecionar uma das opções: 1 - Continuar perguntando / 2 - Parar de perguntar
//    se ele digitar algo diferente de 1 ou de 2 deve mostrar um alerta para ele informando o erro e deve solicitar novamente que escolha uma opção.




var opcao = 1;

while (opcao!=2){
    opcao = parseInt(prompt('Esconlha uma opção utilizando os números de referência:\n\n1- Continuar Peerguntando\n2- Parar de Perguntar'))

    if(opcao!== 1 && opcao !== 2){
        alert('Opção inválida')
    }
}

