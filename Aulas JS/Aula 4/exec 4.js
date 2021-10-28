// 1) Crie uma função que receba uma string e retorna a quantidade de vogais e a quantidade de consoantes na string 
//    da seguinte forma: 'A string [stringInformada] tem X vogas e X consoantes';



function countLetters (string) {
    var consoantCompair = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'w', 'z', 'ç']
    var vogalCompair = ['a', 'e', 'i', 'o', 'u']
    var testString = string.split('');
    var consoant = 0;
    var vogal = 0
    for (i = 0; i < testString.length; i++) {
        if(vogalCompair.includes(testString[i].toLowerCase())) {
            vogal += 1;
        } else if(consoantCompair.includes(testString[i].toLowerCase())) {
            consoant += 1;
        }
    }
    console.log(`A string "${string}" tem ${vogal} vogais e ${consoant} consoantes.`)  
}


// index !== length


