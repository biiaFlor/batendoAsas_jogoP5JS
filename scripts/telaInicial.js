class TelaInicial {
  constructor() {

  }

  draw() {
    this._imagemDeFundo();
    this._texto();
    this._descricao();
    this._botao();
  }

  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height);
  }

  _texto() {
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(75);
    text('Batendo', width/2, height/4);
    textSize(75);
    text('asas', width/2, height/4+50);
  }
  
  _descricao(){
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(25);
    text('Sua missao e ajudar Ruddy', width/2, height/4+100);
    text('a desviar dos avoes e', width/2, height/4+125)
    text('nunca deixar ele atingir o chao', width/2, height/4+145);
  }
  
  _botao(){
    botaoGerenciador.draw();
  }
}