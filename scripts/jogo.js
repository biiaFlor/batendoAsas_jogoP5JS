class Jogo {
  constructor() {
    this.inimigoAtual = 0;
    this.vidaAtual = 0;
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);
    
    pontuacao = new Pontuacao();

    vida = new Vida(3, 3, 25, 25, 20, 20);
    
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 134, 124, 134, 124);
    
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 195, 122, 1368, 854, 10, 100);
    
    const inimigo1 = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 130, 195, 122, 1368, 854, 10, 100);
    
    const inimigo2 = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 195, 122, 1368, 854, 10, 100);
    
    const inimigo3 = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 300, 195, 122, 1368, 854, 10, 100);
    
    const inimigo4 = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 195, 122, 1368, 854, 10, 100);
    
    const inimigo5 = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 260, 195, 122, 1368, 854, 10, 100);
    
    const inimigo6 = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 100, 195, 122, 1368, 854, 10, 100);
    
    const inimigo7 = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 195, 122, 1368, 854, 10, 100);
    
    const inimigo8 = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 80, 195, 122, 1368, 854, 10, 100);
    

    const inimigo9 = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 130, 195, 122, 1368, 854, 10, 100);
    
    const inimigo10 = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 195, 122, 1368, 854, 10, 100);
    
    inimigos.push(inimigo);
    inimigos.push(inimigo1);
    inimigos.push(inimigo2);
    inimigos.push(inimigo3);
    inimigos.push(inimigo4);
    inimigos.push(inimigo5);
    inimigos.push(inimigo6);
    inimigos.push(inimigo7);
    inimigos.push(inimigo8);
    inimigos.push(inimigo9);
    inimigos.push(inimigo10);
    
    
    const vida1 = new Vida(3, 3, 25, 25, 20, 20);
    const vida2 = new Vida(3, 3, 25, 25, 30, 20);
    const vida3 = new Vida(3, 3, 25, 25, 20, 20);
    const vida4 = new Vida(3, 3, 25, 25, 20, 20);
    const vida5 = new Vida(3, 3, 25, 25, 20, 20);
    
    
    inimigos.push(vida1);
    inimigos.push(vida2);
    inimigos.push(vida3);
    inimigos.push(vida4);
    inimigos.push(vida5);
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula()
      somDoPulo.play()
    }
  }

  draw() {
    cenario.exibe();
    cenario.move();
    
    vida.draw();

    pontuacao.exibe();
    pontuacao.adicionarPonto();
    personagem.exibe();
    personagem.aplicaGravidade();

    vida.exibeVida([this.vidaAtual]);
    
    const inimigo = inimigos[this.inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.inimigoAtual++;

      if (this.inimigoAtual > 2) {
        this.inimigoAtual = 0;
      }
      inimigo.velocidade = parseInt(random(10, 30));
    }

    if (personagem.estaColidindo(inimigo)) {
      somImpacto.play();
      vida.perdeVida();
      personagem.ficaInvencivel();
      
      if(vida.vidas === 0){
        somDoJogo.stop();
        somGameover.play();
        image(imagemTelaInicial, 0, 0, width, height);
        image(imagemGameOver, width / 2 - 200, height-400);
        textFont(fonteTelaInicial);
        textAlign(CENTER);
        textSize(25);
        text('Pontuacao: ' + parseInt(pontuacao.pontos), width/2, height-250);
        noLoop()
      }
    }
  }
}