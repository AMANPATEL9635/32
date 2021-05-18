class Block{
constructor(x, y,width,height){
    var option ={

        restitutions:0.4
        ,friction:1.0
    }

this.body=Bodies.rectangle(x,y,width,height)
this.width=width
this.height=height

world.add(world,this.body)
this.Visibility = 225
}

display(){

 var angle = this.body.angle
var pos = this.body.position
push()
translate(pos.x,pox,y)
rotate(angle)
rectMode(CENTER)
rect(0,0,this.width,this.height)
pop()

    
}




}
else{
world.remove(world,this.body)
push()
this.Visibility =Visibility = 5
tint(255,this.Visibility)
rect(999,999,this.width,this.height)
pop()
}

