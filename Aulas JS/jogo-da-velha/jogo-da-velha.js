const PLAYER_1 = 'X';
const PLAYER_2 = 'O';
var isPlaying = PLAYER_1;

var gameOver = false;

// Arrow function que usa o id do Table, para conseguir pegar o 'td' pela TagName e usar o spreed para colocar todos os 'td' em uma array
const getTableTds = () => [...document.getElementById('table').getElementsByTagName('td')];

// Arrow function para trocar os turnos dos players, colocando um if inicial para verificar e ter certeza que não poderá ser alterado alguma 'casa' que já foi marcada
// O segundo if coloca o valor 'X' ou 'O' (que foram definidos em constantes) e posteriormente troca o turno do jogador.
const changePlayerFunc = (event) => {
    const playerTurn = document.getElementById('playerTurn')
    if (event.target.innerText === '' && !gameOver)  {   //gameOver === false , !gameOver === true, if por padrão espera boolean, e passa caso seja true
        if (isPlaying === PLAYER_1) {
            event.target.innerText = PLAYER_1;
            playerTurn.innerText = `Player "${PLAYER_2}" jogando`
            isPlaying = PLAYER_2;
        } else if (isPlaying === PLAYER_2) {
            event.target.innerText = PLAYER_2;
            playerTurn.innerText = `Player "${PLAYER_1}" jogando`
            isPlaying = PLAYER_1;
        }
        winnerAlert();
    }
}

// Arrow function que recebe o player como parâmetro (PLAYER_1 ou PLAYER_2 ou seja, strings "X" ou "O"), após isso, é utilizado o filter 
// para filtrar os td preenchidos e .innerText para acessar o valor de cada td preenchido e saber se é string "X" ou "O", após isso,
// é usado o map para para transformar o objeto td em uma string id.
const verify = (player) => getTableTds().filter((td) => td.innerText === player).map((td) => td.id);

// Arrow function para verificar se algum dos jogadores já ganhou se baseando em uma constante com as combinações de vitória.
const winVerify = (player) => {
    const winnerCondition = [
        ['box_1', 'box_2', 'box_3'],
        ['box_4', 'box_5', 'box_6'],
        ['box_7', 'box_8', 'box_9'],
        ['box_1', 'box_4', 'box_7'],
        ['box_2', 'box_5', 'box_8'],
        ['box_3', 'box_6', 'box_9'],
        ['box_1', 'box_5', 'box_9'],
        ['box_3', 'box_5', 'box_7']
    ]
   return winnerCondition.some((match) => match.every((id) => verify(player).includes(id)));
}


// Arrow function para alertar se um dos jogadores já ganhou
const winnerAlert = () => {
    const playerOneHitMark = winVerify(PLAYER_1);
    const playerTwoHitMark = winVerify(PLAYER_2);

    const tagWinner = document.getElementById('winAlert')

    if (playerOneHitMark) {
        console.log('PLAYER 1 WIN');
        tagWinner.innerText = 'Player 1 Venceu!';
        document.getElementById('playerTurn').innerText = '';
        gameOver = true;
    } else if (playerTwoHitMark) {
        console.log('PLAYER 2 WIN');
        tagWinner.innerText = 'Player 2 Venceu!';
        document.getElementById('playerTurn').innerText = '';
        gameOver = true;
    }
}

// Arrow function para resetar o jogo, adicionando valor de string vazia a todas as casas, e reseta a vez do jogador, mantendo assim o "X" como primeira jogada
const resetTdsFunc = () => {
    getTableTds().forEach((td) => td.innerText = '');

    document.getElementById('winAlert').innerText = '';
    document.getElementById('playerTurn').innerText = `Player "${PLAYER_1}" jogando`;

    isPlaying = PLAYER_1;
    gameOver = false;
}

// Arrow function para adicionar um evento ao botão de resetar o jogo.
const resetGameFunc = () => {
    document.getElementById('restartBtn').addEventListener('click', resetTdsFunc);
}

// Arrow function para marcar a jogada, utilizando as funções já criadas
const startProgramFunc = () => {
    getTableTds().forEach((td) => td.addEventListener('click', changePlayerFunc));
    resetGameFunc();
    document.getElementById('playerTurn').innerText = `Player "${PLAYER_1}" jogando`;
}

startProgramFunc();