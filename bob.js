class Bob {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.2,
          'isStatic': false
      }
      this.body = Bodies.circle(x, y, 25, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      stroke("red");
      fill("red");
      circle(0, 0, this.width, this.height);
      pop();
    }
  };