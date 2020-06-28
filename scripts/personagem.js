class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 5;
    this.alturaDoPulo = -35;
    this.pulos = 0;
    this.invencivel=false;
  }
  
  pula() {
    if(this.alturaDoPulo < this.y){
      this.velocidadeDoPulo = this.alturaDoPulo;
    }
  }
  
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade
    
    if(this.y > this.yInicial){
      this.y = this.yInicial
      this.pulos = 0
    }
  }
  
  ficaInvencivel(){
    this.invencivel = true;
    setTimeout(
      ()=> {this.invencivel = false },
      1000
   );
  }
  
  estaColidindo(inimigo) {
    if(this.invencivel){
      return false;
    }
    
    const precisao = .7
    const colisao = collideCircleCircle(
      this.x, 
      this.y, 
      this.largura * precisao,      
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
    );
    
    return colisao;
  }

}