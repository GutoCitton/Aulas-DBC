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


    //                                      1 - Cadastrar Colaborador;


    var arrayColaboradores = [];
       
    class Colaborador {
        
    nome = '';
    id = 0;
    pontoDia = 0;
    pontoHora = 0;

    constructor(nameParameter, idParameter, dayPointParameter, HourPointParameter) {
        this.nome = nameParameter;
        this.id = idParameter;
        this.pontoDia = dayPointParameter;
        this.pontoHora = HourPointParameter;
    }


    pointMarker() {
        console.log(`Hoje é dia ${this.pontoDia}, horas trbalhadas: ${this.pontoHora}h.`);
    }

    infoColaborador() {
        console.log(`Nome: ${this.nome}\nID: ${this.id}`)
    }
}

    const claudio = new Colaborador('Cláudio', 55412, 22, 8);
    const bruno = new Colaborador('Bruno', 66578, 24, 6);

    claudio.pointMarker()
    claudio.infoColaborador()


    function cadastrarColaborador(nome) {
        arrayColaboradores.push(nome)
   }





//                                      2 - Cadastrar Projeto;


// Conseguir adicionar mais um nome nos colaboradores



class Projeto{
    codigo = 0;
    titulo = '';
    colaboradoresAlocados = [];
    
    constructor(projectCode, projectTitle, projectColaborators) {
        this.codigo = projectCode;
        this.titulo = projectTitle;
        this.colaboradoresAlocados = projectColaborators;
        
    }

    infoProjeto() {
        console.log(`Nome do projeto: ${this.titulo}\nCódigo do projeto: ${this.codigo}\nEnvolvidos no projeto: ${this.colaboradoresAlocados} `)
    }

}


