class Drop {

  constructor(x, y, width, height) {
      var options={
       'restitution': 0.1,
       'friction': 0.00
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
  }
  
  update(){
    if(this.body.position.y>400){
       Matter.Body.setPosition(this.body,{x: random(0,400), y: random(10,0)});
     }
  }
  display(){
    var pos = this.body.position;
    fill("blue");
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
  }
  
}
