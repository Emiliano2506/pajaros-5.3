class Chancho extends PacajaPalitos{
    constructor(x,y){
        super(x,y,25,25);
        this.image = loadImage("./Imagenes/enemy.png");
        this.Visiblility = 255
    }
    display(){
        if(this.body.speed<3){
            super.display()
        }
        else{
        World.remove(world,this.body);
        push();
        this.Visiblility=this.Visiblility-5;
        tint(255,this.Visiblility);
        image(this.image,this.body.position.x,this.body.position.y,25,25)
        //sistema de puntuacion

        pop();
        }
    }
    puntos(){
        if(this.Visiblility < 0 && this.Visiblility > -1000){
            score++; 
            console.log("si sirven los puntos")
        }
        console.log("si entra -24-");
    }
}