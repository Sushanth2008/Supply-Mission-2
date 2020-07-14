class Line{
constructor(x,y,width,height){
var op={
isStatic:true
}

this.body=Bodies.rectangle(x,y,width,height,op);
fill("red")
this.width=width;
this.height=height;
World.add(world,this.body)

}

display(){

var bod=this.body.position;
rect(bod.x,bod.y,this.width,this.height);
}

}