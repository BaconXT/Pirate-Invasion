class Cannon { //criaçao de uma classe
  constructor(x, y, width, height, angle) { //canstruir as posiçoes e largura e altura e angulo
    this.x = x; //essa posiçao x
    this.y = y;//essa posiçao y
    this.width = width; //essa largura
    this.height = height; //essa altura
    this.angle = angle; //esse angulo
    this.cannon_image = loadImage("assets/canon.png"); //para carregar essa imagem do canhao
    this.cannon_base = loadImage("assets/cannonBase.png");//para carregar essa imagem da base do canhao
  } //chave
  display() { //mostrar
   if (keyIsDown(RIGHT_ARROW) && this.angle<360) { //se a tecla da direita for pressionada e o angulo for menor que 70
      this.angle += 1; //ele ira andar uma posiçao
    } //chave

    if (keyIsDown(LEFT_ARROW) && this.angle>-360) { //a mesma coisa do codigo de cima so que com -30 e a seta da esquerda
      this.angle -= 1; //e aqui so muda o +1 para -1 ou seja ele ira para esquerda
    } //chave

    push();  //oque estiver dentro da funaçao  empurrar  e pop sera somente do canhao naverdade aplicado nele
    translate(this.x, this.y); //ele ira mostrar as posiçoes no console
    rotate(this.angle); //para rotacionar o angulu
    imageMode(CENTER);//o modo de imagem sera no centro
    image(this.cannon_image, 0, 0, this.width, this.height); //a imagem do canhao
    pop();//teermina aqui
    image(this.cannon_base, 70, 20, 200, 200); //a base do canhao sendo adicionada
    noFill(); //sem cor
  } //chave
}//chave
