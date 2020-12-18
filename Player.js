class Player{

    constructor(x,y,r){
        var prop={
            isStatic:true
        }

        this.body = Bodies.circle(x,y,r,prop)
        this.r = r;
        this.animate = loadAnimation("pc-running-1.png","pc-running-2.png","pc-running-3.png","pc-running-4.png","pc-running-5.png","pc-running-6.png","pc-running-7.png","pc-running-8.png","pc-running-8.png")
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;
        animation(this.animate,pos.x,pos.y,this.r,this.r)
    }

}