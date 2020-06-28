function setup() {
  createCanvas(windowWidth, windowHeight);

  jogo = new Jogo();
  jogo.setup();
  
  botaoGerenciador = new BotaoGerenciador('Jogar', width/2, height/2);
  
  telaInicial = new TelaInicial();
  telaInicial.draw();
  
  cenas={
    jogo,
    telaInicial
  };
  
  frameRate(35)
  somDoJogo.loop();
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
    cenas[cenaAtual].draw();
}