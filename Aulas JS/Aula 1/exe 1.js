// 1) Crie um programa que, a partir de um texto que o usuário digitar (prompt), verifique:
//    - Se o texto for igual à 'SIM' informe um alerta para o usuário informando o texto "Parabéns";
//    - Se o texto for igual à 'Não' solicite novamente para o usuário informar algum texto e após isso mostre para ele o texto digitado em um alerta;
//    - Se for digitado qualquer outra string solicite uma confirmação para o usuário com o texto: 'Você tem noções dos seus atos?'

var text = prompt("Você tem permissão para entrar? (Sim ou não)");

if (typeof text === "string" && text === "sim") {
    alert("Parabéns");
}
else if (typeof text === "string" && text === "não" || text === "nao") {
    var alertTxt = prompt("Defina seu humor com um número.");
    alert(`Seu nível de humor é ${alertTxt}`);
} else{
    alert("Você tem noção de serus atos?");
}