// 4a) Tendo uma lista vazia [], crie uma função que recebe um elemento qualquer como parâmetro e que adiciona esse elemento à lista;
// 4b) Crie outra função para remover o último elemento da lista;

var listaVazia = []


// a)
function addElement (element, array) {
    array.push(element);
}


// b)
function removeElement (array) {
    array.pop();
}

