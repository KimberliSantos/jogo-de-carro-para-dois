class Jogo{
    constructor(){
        
    }

    descobreEstadoJogo(){
        var estadoJogoReferencia = bancoDeDados.ref("estadoJogo")
        estadoJogoReferencia.on("value", function (dado) {
        })
    }

    atualizaEstado(estado){
bancoDeDados.ref("/").update({
    estadoJogo: estado
})
    }

    async comecaJogo(){
        if(estadoJogo=== 0){
            jogador = new Jogador()
            var  qtdJogadoresRef= await bancoDeDados.ref("quantidadeJogadores").once("value")
            if(qtdJogadoresRef.exists()){
                quantidadeJogadores = qtdJogadoresRef.val()
                jogador.contaJogador()
            }
            formulario = new Formulario()
            formulario.desenha()
            
        }
    }

    jogar(){
        formulario.esconder()
        textSize(30)
        text("começa jogo!",120,100)
        jogador.pegaInformacaoJogador()
        if(todosJogadores !==undefined){
           
            var mostrarPosicao = 130
            for (var jgd = 0;jgd < todosJogadores.length; jgd++){
                if(todosJogadores[jgd]==="jogador"+jogador.index){
                    fill("red")
                }else{
                    fill("black")
            

                } 

            }
            mostrarPosicao += 20
            textSize(15)


        }
    }
}