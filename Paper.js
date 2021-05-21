class Paper {
    constructor(x,y) {
        var options = {
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.image = loadImage("paper.png")
        this.body = Bodies.circle(x,y,25,options)
        World.add(world,this.body)
    }
    display(){
   var pos = this.body.position
   var angle = this.body.angle
      push();
      translate(pos.x, pos.y);
      
      imageMode(CENTER)
      image(this.image,0, 0, 70, 70);
      pop();
    }
}