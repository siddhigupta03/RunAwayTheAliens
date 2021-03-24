class Hexagon {
    constructor(x,y,r){
      var ops_b={
          isStatic:false,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.image = loadImage("bomb.jpeg");
      this.body = Bodies.circle(x,y,r/2,ops_b);
      World.add(world,this.body);
  }
  display(){
      var spos = this.body.position;
      push();
      translate(spos.x,spos.y);
      fill(255,0,255);
      imageMode(CENTER);
      ellipseMode(RADIUS);
      image(this.image,-30, -30, this.r*2, this.r*2);
      pop();
  }
    };