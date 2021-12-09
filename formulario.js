class Formulario{
    constructor(){

    }

    desenha(){
        var titulo = createElement("h1")
        titulo.html("Car Games")
        titulo.position(130,0)

        var nomeinput = createInput("nome") 
        nomeinput.position(130,160)

        var botaoJogar = createButton("VamosJogar")
        botaoJogar.position(250,200)

        var saudacao = createElement("h3")

        botaoJogar.mousePressed(function(){
            nomeinput.hide()
            botaoJogar.hide()
            var nome = nomeinput.value()
            quantidadeJogadores = quantidadeJogadores +1
            jogador.atualizar(nome)
            jogador.atualizaNumJogador(quantidadeJogadores)
            
            saudacao.html("olá "+ nome)
            saudacao.position(250,200)
        })


    }
}