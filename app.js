var altura = 0;
var largura = 0;

function ajustaTamanhoJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;
  console.log(altura, largura);
}

ajustaTamanhoJogo();


var posicaoX = Math.floor(Math.random() * largura);
var posicaoY = Math.floor(Math.random() * altura);