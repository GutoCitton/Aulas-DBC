// 1) Crie uma função que receba uma string e retorna a quantidade de vogais e a quantidade de consoantes na string 
//    da seguinte forma: 'A string [stringInformada] tem X vogas e X consoantes';



function countLetters (string) {
    var testString = string.split('');
    var consoant = 0;
    var vogal = 0
    for (i = 0; i < testString.length; i++) {
        if(testString[i] === 'a' || testString[i] === 'e' || testString[i] === 'i' || testString[i] === 'o' || testString[i] === 'u') {
            vogal += 1;
        } else if(testString[i] !== ' '){
            consoant += 1;
        }
    }
    console.log(`A string "${string}" tem ${vogal} vogais e ${consoant} consoantes.`)  
}


// index !== length