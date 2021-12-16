class Formulario{
    constructor(){
this.nomeinput  = createInput("nome") 
this.botaoJogar = createButton("vamos jogar!!")
this.saudacao = createElement("h2")
    }

     esconder(){
         this.nomeinput.hide()
         this.botaoJogar.hide()
         this.saudacao.hide()
     }

    desenha(){
        var titulo = createElement("h1")
        titulo.html("Car Games")
        titulo.position(130,0)

        this.nomeinput.position(130,160)
        this.botaoJogar.position(250,200)

      this.botaoJogar.mousePressed(function(){
          console.log(this.nomeinput)
            this.nomeinput.hide()
           this.botaoJogar.hide()
        jogador.name = this.nomeinput.value()
            quantidadeJogadores = quantidadeJogadores +1
            jogador.atualizar()
            jogador.atualizaNumJogador(quantidadeJogadores)
            
            this.saudacao.html("olá "+ jogador.name)
            this.saudacao.position(250,200)
        })


    }
}