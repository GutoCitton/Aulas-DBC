/*
    +============================================================+
    |                    CADASTRO DE PRODUTOS                    |
    +============================================================+

    Imaginando que teremos o seguinte produto:
    
    (modelo do objeto)
    {
        id: 0           (number, deve ser sempre único, ou seja, não podem existir dois produtos com o mesmo id)
        descricao: "",  (string)
        valor: 0        (number)
    }

    Teremos também uma lista de produtos que será uma variável de escopo global (var listaDeProdutos = []);

    Criem um sistema onde seja possível:

    Obs: (utilizem pelo menos 2 arrow functions);

    1) Cadastrar um produto;
        - cuidado para não ter o mesmo id (identificador);

    2) Excluir um produto pelo código (USAR filter);

    3) Encontrar um produto pelo código (USAR find);

    4) Imprimir no console a lista de produtos cadastrados (USAR forEach);

    

    ***EXTRA (NÃO OBRIGATÓRIO)***
    E) Verificar o total de patrimônio da loja (valor total de todos os produtos, USAR reduce);

*/



// 1) Cadastrar um produto;
// - cuidado para não ter o mesmo id (identificador);

var listaDeProdutos = [];
var IdAtual = 0;


var addItem = (newItem) => {
    var itemFinal = {
        descricao: String(newItem.descricao),
        valor: Number(newItem.valor)
    };
    if (itemFinal.descricao !== '' && itemFinal.descricao !== undefined && itemFinal.valor !== NaN && itemFinal.valor !== undefined && itemFinal.valor !== 0) {
        itemFinal.id = IdAtual + 1;
        IdAtual = itemFinal.id;
        listaDeProdutos.push(itemFinal);
    } else {
        console.log('Item inválido');
    }
};





// 2) Excluir um produto pelo código (USAR filter);


var deleteProductById = (Id) => {
   listaDeProdutos = listaDeProdutos.filter((product) => product.id !== Id);
}



// 3) Encontrar um produto pelo código (USAR find);


var findProductById = (Id) => listaDeProdutos.find((product) => product.id === Id);




// 4) Imprimir no console a lista de produtos cadastrados (USAR forEach);


var listProduct = (list) => list.forEach((product) => console.log(product));


// E) Verificar o total de patrimônio da loja (valor total de todos os produtos, USAR reduce);


var valorTotal = (list) => list.reduce((acumulador, valorAtual) => acumulador + valorAtual.valor, 0);

valorTotal(listaDeProdutos);