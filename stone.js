class Stone{
    constructor(x,y){
        var option ={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2,
        }
        this.body = Bodies.rectangle(x,y,20,20,option);
        this.width = 20;
        this.height = 20;
        this.image = loadImage("Sprites/stone.png");
        World.add(world,this.body);
    }

    display(){
    var angle = this.body.angle;
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
    }
}