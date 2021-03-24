class BaseClass {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 40, 60, options);
      this.width = 40;
      this.height = 60;
      this.img = loadImage("alien.jpeg");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill(255);
      image(this.img,-30, -30, this.width, this.height);
      pop();
    }
  };