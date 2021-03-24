class Box extends BaseClass {
  constructor(x, y){
    super(x,y,40,60);
    this.image = loadImage("alien.jpeg");
    this.Visiblity = 255;
    this.scores = 0;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 40, 60);
     pop();
   }
   }
   score() {
    textSize(30);
    fill("black");
    text("Score:" +this.scores, 50,130);

    if(this.Visiblity<0 && this.Visiblity>-1005) {
      this.scores++;
    }
   }

 }
