var altura = 0;
var largura = 0;
var vidas = 3;

function ajustaTamanhoJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;
}

ajustaTamanhoJogo();

function posicaoRandomica() {
  //remover o mosquito anterior (caso exista)
  if(document.getElementById('mosquito')) { //vendo se existe mosquito
    document.getElementById('mosquito').remove(); //removendo

    if(vidas < 1) {
      alert("gameover")
    } else {
      document.getElementById('v' + vidas).src='imagens/coracao_vazio.png';
      vidas--;
    }
    
  }
  

  var posicaoX = Math.floor(Math.random() * largura) - 90;
  var posicaoY = Math.floor(Math.random() * altura) - 90;

  posicaoX = posicaoX < 0 ? 0 : posicaoX; //condição ? true : false
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  //criando o elemento html
  var mosquito = document.createElement("img"); //criando uma imagem
  mosquito.src = 'imagens/mosquito.png'; //src da imagem
  mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio(); //class da imagem
  mosquito.style.left = posicaoX + 'px';
  mosquito.style.top = posicaoY + 'px';
  mosquito.style.position = 'absolute';
  mosquito.id = 'mosquito';
  mosquito.onclick = function() {
    this.remove();
  }

  document.body.appendChild(mosquito); //adicionando um filho para o body
}

function tamanhoAleatorio() { // função para atribuir tamanho aleatorio do mosquito
  var classe = Math.floor(Math.random() * 3);

  switch(classe) {
    case 0:
      return 'mosquito1';
    case 1:
      return 'mosquito2';
    case 2:
      return 'mosquito3';
  }
}

function ladoAleatorio() { //função criada para que o mosquito vire pra direita/esquerda
  var classe = Math.floor(Math.random() * 2);

  switch(classe) {
    case 0:
      return 'ladoA';
    case 1:
      return 'ladoB';
  }
}