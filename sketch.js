var estadoJogo = 0;
var bancoDeDados;
var jogo;
var jogador;
var quantidadeJogadores;
var formulario;
var distancia = 0
var todosJogadores;

function setup(){
    createCanvas(500,500);

    bancoDeDados= firebase.database()
    jogo = new Jogo()
    jogo.descobreEstadoJogo()
    jogo.comecaJogo()

}

function draw(){
    background("white");


}

