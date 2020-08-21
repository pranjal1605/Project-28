class Mango{
    constructor(x,y) {
        var options = {
            isStatic: true,
            restitution:0,
            friction:1,
        }
        this.body = Bodies.circle(x,y,10,options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("Sprites/mango.png");
        World.add(world, this.body);
    }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0,this.width, this.height);
        pop();
    }
}