class Jogador{
constructor(){
this.index = null
this.distancia = 0
this.name = null

}

atualizaNumJogador(numero){
bancoDeDados.ref("/").update({
    quantidadeJogadores: numero
})
}

atualizar(){
    var jogadorIndice="jogadores/jogador "+this.index
    bancoDeDados.ref(jogadorIndice).set({
        nome:this.name,
        distancia: this.distancia
    })
}

contaJogador(){
    var qtdJogadoresRef = bancoDeDados.ref("quantidadeJogadores")
    qtdJogadoresRef.on("value", function(dado){
        quantidadeJogadores= dado.val()
    })
} 
pegaInformacaoJogador(){
    var informacaoJogadorRef =  bancoDeDados.ref("jogadores")
    informacaoJogadorRef.on("value",function(dado){
todosJogadores=dado.val()
    }) 
}
}