// 5) Crie um programa que recebe 3 notas (T1, T2 e P1) como números reais (float, ex: 5.2), realize a média dessas notas e realize a seguinte verificação:
//    (menor que 5 = alerta de reprovado, de 5 até 7 = alerta de recuperação e acima de 7 = alerta de parabenização)
//    Obs: adicione as validações para ter certeza que os números inseridos estão certos;



var t1 = Number.parseFloat(prompt("Digite a nota do primeiro trabalho"));

var t2 = Number.parseFloat(prompt("Digite a nota do segundo trabalho"));

var p1 = Number.parseFloat(prompt("Digite a nota da prova"));

var mediaNotas = ((t1 + t2 + p1) / 3).toFixed(1);

if (t1.toString() !== "NaN" && t2.toString() !== "NaN" && p1.toString() !== "NaN" && t1 + t2 + p1 <= 30) {
    if (mediaNotas < 5) {
        alert(`Sua nota foi ${mediaNotas}`);
        alert("REPROVADO!");

    } 
    else if (mediaNotas >= 5 && mediaNotas < 7) {
        alert(`Sua nota foi ${mediaNotas}`);
        alert("RECUPERAÇÃO!");
    }
    else {
        alert(`Sua nota foi ${mediaNotas}`);
        alert("PARABÉNS, VOCÊ FOI APROVADO!");
    }
} 
else {
    alert("Favor digitar um valor válido.");
}