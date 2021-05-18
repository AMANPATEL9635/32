class Stand{
    constructor(x, y,width,height){
var option = {
isStatic: true

}
   this.body = Bodies.rectangle(x,y,width,height)
this.width=width
this.height=height
World.add(world,this.body)

}
display(){
    var angle = this.body.angle
    strokeweigth(2)
    fill("white")
    push()
    translate(this.body.postion.x,this.body.postion.y)
     rotate(angle)
     rectMode(CENTER)
     rect(0,0,this.width,this.height)
pop()

}

}

