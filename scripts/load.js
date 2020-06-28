function preload() {
  imagemCenario = loadImage('imagens/cenarios/ceu2.jpg');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemVida = loadImage('imagens/assets/coracao.png');
  imagemPersonagem = loadImage('imagens/personagem/personagem2.png');
  imagemInimigo = loadImage('imagens/inimigos/aviao.png');
  imagemTelaInicial = loadImage('imagens/cenarios/ceu2.jpg');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');

  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  somImpacto = loadSound('sons/impacto.mp3');
  somGameover = loadSound('sons/gameover.mp3');
}