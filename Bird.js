class Bird extends BaseClass {
  constructor(x, y) {
    //We use super() to transfer all the properties of the parent class to the
    //child class through the parent class constructor
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    
  };
  display(){
    
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  };
};