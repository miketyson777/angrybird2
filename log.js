class Log{
    constructor(x,y,height,angle){
       var  options={
            restitution:1,
            friction:1,
            density:1,
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,20,height,options)
        this.x=x
        this.y=y
        this.height=height
        this.width=20
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill("purple")
        stroke("black")
        strokeWeight(7)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();
    }
}