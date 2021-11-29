var bola;
var bancoDeDados;
var posicao

function setup(){
    createCanvas(500,500);

    bancoDeDados= firebase.database()
    bola = createSprite(250,250,10,10);
    bola.shapeColor = "red";

var posicaoBola = bancoDeDados.ref("ball/position")
posicaoBola.on("value",lerPosicao,mostrarErro) 
}

function draw(){
    background("white");

    if(posicao !== undefined){
        if(keyDown(LEFT_ARROW)){
            escreverPosicao(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            escreverPosicao(1,0);
        }
        else if(keyDown(UP_ARROW)){
            escreverPosicao(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            escreverPosicao(0,+1);
        }
        drawSprites();
    }

}

function escreverPosicao(x,y){
    bancoDeDados.ref("ball/position").set({
        x:posicao.x + x,
        y:posicao.y + y,
    })
}
function lerPosicao(dado){

posicao = dado.val()

bola.x = posicao.x
bola.y = posicao.y
}

function mostrarErro(){
    console.log("deu erro aqui o")
}