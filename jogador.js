class Jogador{
constructor(){


}

atualizaNumJogador(numero){
bancoDeDados.ref("/").update({
    quantidadeJogadores: numero
})
}

atualizar(nome){
    var jogadorIndice="Jogador "+quantidadeJogadores
    bancoDeDados.ref(jogadorIndice).set({
        nome:nome
    })
}

contaJogador(){
    var qtdJogadoresRef = bancoDeDados.ref("quantidadeJogadores")
    qtdJogadoresRef.on("value", function(dado){
        quantidadeJogadores= dado.val()
    })
} 
}