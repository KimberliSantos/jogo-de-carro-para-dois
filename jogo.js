class Jogo{
    constructor(){
        
    }

    descobreEstadoJogo(){
        var estadoJogoReferencia = bancoDeDados.ref("estadoJogo")
        estadoJogoReferencia.on("value", function (dado) {
            estadoJogo = dado.val()
        })
    }

    atualizaEstado(estado){
bancoDeDados.ref("/").update({
    estadoJogo: estado
})
    }

    comecaJogo(){
        if(estadoJogo=== 0){
            jogador = new Jogador()
            jogador.contaJogador()
            formulario = new Formulario()
            formulario.desenha()
            
        }
    }
}