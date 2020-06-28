class Vida{
  constructor(total, inicial, largura, altura, xInicial, y){
    this.total = total;
    this.inicial = inicial;    
    this.vidas = this.inicial;    
    this.largura = largura;
    this.altura=altura;
    this.xInicial = xInicial;
    this.y = y;
  }
  
  draw(){
    for(let i=0;i<this.vidas;i++){
      const margem = i*10;
      const posicao = this.xInicial*(1+i);
    
      image(imagemVida, posicao+margem, this.y, this.largura, this.altura);
    }
  }
  
  exibeVida(){
    for(let i=0;i<this.vidas;i++){
      const margem = i*10;
      const posicao = this.xInicial*(1+i);
  image(imagemVida, posicao+margem, this.y, this.largura, this.altura);
    }
  }
    
    ganhaVida(){
      if(this.vidas <= this.total){
         this.vidas++;
      }
    }
  
  perdeVida(){
    this.vidas--;
  }
}