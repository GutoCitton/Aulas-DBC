/*
    +===============================================================+
    |                SISTEMA DE PROJETOS E ALOCACOES                |
    +===============================================================+

    Nesse nosso sistema teremos os seguintes modelos de Entidade/Objeto/Classe ("sinônimos"):

    Marcacao {
        dia; (só um number mesmo, ex: 22 )
        horas; (também só um number, ex: 9)
    }

    Colaborador {
        id (unique number);
        nome;
        ?codProjeto;
        marcacoesPonto; (um array de marcação de horas, ex: [ { dia: 22, horas: 9 } ]);
        

        marcarPonto( d, h );
    };

    Projeto {
        codigo (unique number),
        titulo,
        ?colaboradoresAlocados = [],
    };

    Crie também uma classe de 'Validacoes' que terá métodos úteis de validação para usar em várias partes do sistema;
    Ex: Validacoes { 
        validaAlgo() {
            return ehValido;
        }
    }

    Para utilizar essas validações, 
    Ex: var mensagem;
    if(new Validacoes().validaAlgo(mensagem)) {
        // só pra exemplificar como utilizar
    }


    Vamos criar um sistema da seguinte forma;
    Deve ser apresentado para o usuário um "menu" para ele escolher uma ação a ser realizada;


    As opções serão:

    1 - Cadastrar Colaborador;
    2 - Cadastrar Projeto;
    3 - Alocar Colaborador; (à algum projeto)
    4 - Desalocar Colaborador;
    5 - Marcar Ponto;
    6 - Ver Lista de Colaboradores Sem Projeto;
    7 - Ver Lista de Projetos Sem Colaboradores;
    8 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto;
    9 - Encerrar Execução do Sistema;
*/

class Validacoes {
    valorPresente(valor) {
        return (valor !== null && valor !== undefined && valor !== '');
    }
}

class Marcacao {
    dia = 0;
    hora = 0;

    constructor( dia, hora ) { // É opcional
        this.dia = dia;
        this.hora = hora;
    }
}

class Colaborador {
    id = 0;
    nome = '';
    idProjeto = 0; // opcional no momento de criação
    marcacoesPonto = [];

    constructor(id, nome, idProjeto, marcacoesPonto) {
        this.id = id;
        this.nome = nome;
        this.idProjeto = new Validacoes().valorPresente(idProjeto) ? idProjeto : this.idProjeto;;
        this.marcacoesPonto = new Validacoes().valorPresente(marcacoesPonto) ? marcacoesPonto : this.marcacoesPonto;
    }
    
    marcarPonto( dia, hora ) {
        const marcacaoCriada = new Marcacao( dia, hora );
        this.marcacoesPonto.push(marcacaoCriada);
    }
};

class Projeto {
    id = 0;
    titulo = '';
    colaboradoresAlocados = []; // tanto um Colaborador, como um idColaborador por exemplo

    constructor(id, titulo, colaboradoresAlocados) {
        this.id = id;
        this.titulo = titulo;
        this.colaboradoresAlocados = new Validacoes().valorPresente(colaboradoresAlocados) ? colaboradoresAlocados : this.colaboradoresAlocados;;
    }
};


let listaDeColaboradores = [];
let listaDeProjetos = [];
let idAtualColaborador = 0;
let idAtualProjeto = 0;


const findColaborador = id => {
    return listaDeColaboradores.find( c => c.id === id );
}


const cadastrarColaborador = () => {
    let nomeColaborador = prompt('Informe o nome do colaborador:');
    idAtualColaborador++;
    let colaborador = new Colaborador(idAtualColaborador, nomeColaborador);
    listaDeColaboradores.push(colaborador);
    console.log('Colaborador cadastrado => ', colaborador);
}


const cadastrarProjeto = () => {
    let tituloProjeto = prompt('Informe o titulo do projeto:');
    idAtualProjeto++;
    let projeto = new Projeto(idAtualProjeto, tituloProjeto);
    listaDeProjetos.push(projeto);
    console.log('Projeto cadastrado => ', projeto);
}


const alocarColaborador = () => {
    let idColaborador = parseInt(prompt('Informe o id do colaborador:'));
    let idProjeto = parseInt(prompt('Informe o id do projeto:'));

    let colaborador = findColaborador(idColaborador);
    let projeto = listaDeProjetos.find( p => p.id === idProjeto );

    // se validações estiverem certas até o momento
    colaborador.idProjeto = idProjeto;
    projeto.colaboradoresAlocados.push(colaborador);

    console.log('Colaborador Alocado => ', colaborador);
    console.log('Projeto Alocado => ', projeto);
}


const desalocarColaborador = () => {
    let idColaborador = parseInt(prompt('Informe o id do colaborador:'));

    let colaborador = findColaborador(idColaborador);
    let projeto = listaDeProjetos.find( p => p.id === colaborador.idProjeto );

    colaborador.idProjeto = 0;
    projeto.colaboradoresAlocados = projeto.colaboradoresAlocados.filter( cA => cA.id !== colaborador.id );

    console.log('Colaborador Desalocado => ', colaborador);
    console.log('Projeto Desalocado => ', projeto);
}


const marcarPonto = () => {
    let idColaborador = parseInt(prompt('Informe o id do colaborador para marcar o ponto.'));
    let dia = parseInt(prompt('Informe o dia da marcação.'));
    let hora = parseInt(prompt('Informe quantas horas.'));

    let colaborador = findColaborador(idColaborador);

    let marcacaoNova = new Marcacao(dia, hora);
    colaborador.marcacoesPonto.push(marcacaoNova);

    console.log('Colaborador => ', colaborador);
}


const colaboradoresDesalocados = () => {
    let colaboradoresSemProjeto = listaDeColaboradores.filter( c => c.idProjeto === 0 );
    console.log('colaboradoresDesalocados => ');
    colaboradoresSemProjeto.forEach( c => console.log(c));
}

const projetosSemColaboradores = () => {
    let projetos = listaDeProjetos.filter( p => p.colaboradoresAlocados.length === 0 );
    console.log('projetosSemColaboradores => ');
    projetos.forEach( p => console.log(p));
}

const colaboradoresQueNaoMarcaramPonto = () => {
    let colaboradoresSemPonto = listaDeColaboradores.filter( c => c.marcacoesPonto.length === 0 );
    console.log('colaboradoresQueNaoMarcaramPonto => ');
    colaboradoresSemPonto.forEach( c => console.log(c));
}


const listaCompleta = () => {
    console.log('lista de colaboradores => ');
    listaDeColaboradores.forEach( c => console.log(c) );

    console.log('lista de projetos => ');
    listaDeProjetos.forEach( p => console.log(p) );
}



const menu = () => {
    let opcao = prompt(`Escolha a opção desejada: 1 - Cadastrar Colaborador 2 - Cadastrar Projeto; 3 - Alocar Colaborador; (à algum projeto) 4 - Desalocar Colaborador; 5 - Marcar Ponto; 6 - Ver Lista de Colaboradores Sem Projeto; 7 - Ver Lista de Projetos Sem Colaboradores; 8 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto; 9 - Ver Lista de Colaboradores e Projetos; 10 - Encerrar Execução do Sistema;`);

    switch(opcao) {
        case '1':
            cadastrarColaborador();
            menu();
            break;
        case '2':
            cadastrarProjeto();
            menu();
            break;
        case '3':
            alocarColaborador();
            menu();
            break;
        case '4':
            desalocarColaborador();
            menu();
            break;
        case '5':
            marcarPonto();
            menu();
            break;
        case '6':
            colaboradoresDesalocados();    
            menu();
            break;
        case '7':
            projetosSemColaboradores();    
            menu();
            break;
        case '8':
            colaboradoresQueNaoMarcaramPonto();    
            menu();
            break;
        case '9':
            listaCompleta();
            menu();
            break;
        case '10':
            return;
        default:
            console.log('Opção inválida');
            menu();
            break;
    }
}

// escopo global do código
menu();