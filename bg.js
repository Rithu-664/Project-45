class Bg{

    constructor(x,y,w,h){
        var prop={
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,w,h,prop)
        this.w=w;
        this.h=h;
        this.image = loadImage("bg3.jpg")
        World.add(world,this.body)

    }

    display(){
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,this.w,this.h)
    }

}