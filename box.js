class Box{
    //PROPERTIES
    constructor(x, y, w, h){
        var options = {restitution: 1};
      this.body = Bodies.rectangle(x, y, w, h, options);
      World.add(world, this.body);

      this.width = w;
      this.height = h;
    }

    //FUNCTIONS
    display(){
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}

/*
sprite.width
sprite.isTouching()
box1
box1.body

this --> keyword which specifies the object which is using the property
*/