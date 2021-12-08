class CannonBall { //bola do canhao (uma classe)
  constructor(x, y) { //construindo as posiçoes
    var options = { //opçoes
      isStatic: true //ela é statica
    };  //chave
    this.r = 30; //esse raio
    this.body = Bodies.circle(x, y, this.r, options); //o corpo
    this.image = loadImage("./assets/cannonball.png");  //a imagem
    World.add(world, this.body); //para adiocionar a bola a o universo SUCRILHADO
  }

  shoot() { //funçar de atirar PEW PEW
   var newAngle = cannon.angle - 20; //variavel novo angulo do canhao quando ele atira 
    newAngle = newAngle *(3.14/180) //novo angulo mutiplicado por 3.14 dividido por 180 ou seja numero do PI
    var velocity = p5.Vector.fromAngle(newAngle); //variavel da velocidade  do tiro
    velocity.mult(0.99); //velocidade do tiro
    Matter.Body.setStatic(this.body, false); //apra criar o corpo da bola (statica)
    Matter.Body.setVelocity(this.body, { //para criar a velocidade dela
      x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)}) //velocidade do tiro na posiçao y e x
  }

  display() {//mostrar na tela
    var angle = this.body.angle; //variavel anglo
    var pos = this.body.position; //variavel  posiçao
    push();//empurrar as funçoes a baixo:
    imageMode(CENTER); //Forma da imagem no centro
    image(this.image, pos.x, pos.y, this.r, this.r); //posiçoes de imagens
    pop(); //as funçoes empurradas encerram aqui 




  } 
}                                                                                            