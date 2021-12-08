class Boat {
constructor(x,y,width,height,BoatPos) {
this.body = Bodies.rectangle (x,y,width,height);
this.width = width;
this.height = height;
this.image = loadImage("./assets/boat.png");
this.boatPosition = BoatPos;
World.add(world, this.body);





}
display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();  //oque estiver dentro da funaçao  empurrar  e pop sera somente do canhao naverdade aplicado nele
    translate(pos.x, pos.y); //ele ira mostrar as posiçoes no console
    rotate(angle); //para rotacionar o angulu
    imageMode(CENTER);//o modo de imagem sera no centro
    image(this.image, 0, this.boatPosition, this.width, this.height); //a imagem do barco
    pop();//teermina aqui









} 

} 