// 2) Exiba um alerta para o usuário com a mensagem "Olá cliente eu me chamo atendente, em 
// Crie um programa que solicita para o usuário dois valores de texto, nome do cliente e nome do atendente;que posso ajudar?" (String interpolation)

alert("Olá, bem vindo ao Guto's Shopp!");

var clientName = prompt("Qual seu nome?");
var atendentName = prompt("Qual o nome do atendente?");

var teste1 = Number.parseInt(clientName);
var teste2 = Number.parseInt(atendentName);

if (teste1.toString() === 'NaN' && teste2.toString() === 'NaN') {
    alert(`Olá ${clientName}, me chamo ${atendentName}, no que posso ajudar?`)
} else {
    alert("Nome inválido")
}

