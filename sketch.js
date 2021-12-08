const Engine = Matter.Engine; //construindo o motor da fisica
const World = Matter.World; //construndo o mundo
const Bodies = Matter.Bodies; //construindo os corpos
const Constraint = Matter.Constraint; //construindo  sei la oque

var engine, world, backgroundImg; //variavel  dos corpos back ground motor da fisica e tal coisa que eu nao sei
var rip_boat
var canvas, angle, tower, ground, cannon; //area anglo torre chao canhao
var balls = []; //balas infinitas
var boats = [] //barcos infinitos

function preload() { //funçao de sons e imagens
  backgroundImg = loadImage("./assets/background.gif"); //imagem do fundo
  towerImage = loadImage("./assets/tower.png"); //imagem da torre
} //chave

function setup() { //funçao de configuraçao
  canvas = createCanvas(1200, 600); //area (tamanho)
  engine = Engine.create(); //motor da fisica sendo criado é uma funçao (exeto quando nao é bem assim)
  world = engine.world; //mundo sendo criado ou seja adicionado ao motor da fisica
  angleMode(DEGREES); //modo do anglo em graus
  angle = 15; //15 graus
  rip_boat = new Boat(width - 79,height - 60, 170, 170, -80)
  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true }); // o chao sendo criado
  World.add(world, ground); //o chao sendo adicionado ao mundo

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true }); //a torre sendo criada
  World.add(world, tower); //a torre sendo adicionada ao mundo

  cannon = new Cannon(180, 110, 130, 100, angle); //os anglo do canhao (em um novo canhao la no Cannon.java script)
}// chave

function draw() { //funçao de desenhar
  background(189); //cor de fundo
  image(backgroundImg, 0, 0, width, height); //imagem do fundo

  Engine.update(engine); //para que o motor da fisica seja executado

  
  rect(ground.position.x, ground.position.y, width * 2, 1); //modo do retangulo
 

  push(); //empurrar os codigos:
  imageMode(CENTER); //modo de imagem
  image(towerImage,tower.position.x, tower.position.y, 160, 310); //imagem da torre
  pop(); //eles terminao aqui

  for (var i = 0; i < balls.length; i++) { //pra que a bola seja infinita
    showCannonBalls(balls[i]); //para mostrar as bolas
  } //chave

  cannon.display(); //para mostrar o canhao
  Matter.Body.setVelocity(rip_boat.body,{
    x: -0.95, 
    y: 0
  })
  rip_boat.display(); //para mostrar o barco falicido
} //chave

function keyPressed() {  //funçao pra quando aperta a tecla
  if (keyCode === DOWN_ARROW) { //de baixo
    var cannonBall = new CannonBall(cannon.x, cannon.y); //ele ira  criar uma nova bola de canhao para ser lançada
    Matter.Body.setAngle(cannonBall.body, cannon.angle); //ira colocar o angulo da bala de canhao
    balls.push(cannonBall); //e aplicar a força a bola (tudo volta denovo)
  } //chave
} //chave

function showCannonBalls(ball) { //funçar de mostrar a bola quando atirada
  if (ball) { //se a bola for atirada
    ball.display(); //puxar a funçao dispray da CannonBall
  } //chave
} //chave

function keyReleased() { //funçao seta para baixo
  if (keyCode === DOWN_ARROW) { //for apertada
    balls[balls.length - 1].shoot(); //uma bola ira ser retirada
  } //chave
} //chave
function showboats() {
if (boats.length >0) {



}
else {
var rip_boat = new Boat(width, height - 60, 170,  170, -60);
boats.push(rip_boat);
}




}
