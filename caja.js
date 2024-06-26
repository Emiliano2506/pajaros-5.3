class PacajaPalitos{
    constructor(x,y,a,at,angle){
        this.x = x;
        this.y = y;
        this.ancho=a;
        this.alto = at;
        var variablePiso={
            //isStatic:true
            'restitution':0.8,
            'friction':0.1,
            //'friction':0.5,
            'density':0.1
        }
        
        this.body = Bodies.rectangle(this.x,this.y,this.ancho,this.alto,variablePiso);
        this.image = loadImage("./Imagenes/base.png");
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.ancho,this.alto);
        pop();
    }
}