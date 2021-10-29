/*  Crie uma função que recebe um aluno e adiciona esse aluno à uma lista de alunos (nome, idade) {nome: "aaa", idade: 55} 
    crie uma função que recebe um nome e retorne o aluno que tiver aquele nome (Find) */ 


var alunos = []

var addAluno = (newAluno) => alunos.push(newAluno);

addAluno ({nome:'guto', idade: 22})
addAluno ({nome:'bruno', idade: 25})

var buscaAluno = nomeDoAluno =>  alunos.find(findStudent => findStudent.nome === nomeDoAluno );

console.log(buscaAluno)




// Retorna caso passe como parametro um objeto VVVVV

// var buscaAluno = objetoAluno =>  alunos.find(findStudent => findStudent.nome === objetoAluno.nome); 