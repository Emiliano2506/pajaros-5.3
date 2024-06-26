/*class Red extends PacajaPalitos{
    constructor(x,y){
        super(x,y,30,30);
        this.image = loadImage("./Imagenes/bird.png");
    }
    display(){
    super.display()
    }
}*/


class Red extends PacajaPalitos{
    constructor(x,y){
        super(x,y,30,30);
        this.image = loadImage("./Imagenes/bird.png");
        this.image1 = loadImage("./Imagenes/humo.png");
        this.trayectory = []
    }
    display(){
        console.log("espero funsione - red -")
    super.display();
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
        console.log("trayectoria");
    }
    for(var i =0; i<this.trayectory.length; i++){
        image(this.image1, this.trayectory[i][0], this.trayectory[i][1]);
        }
    }
}