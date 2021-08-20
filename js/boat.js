class Boat{
    constructor(x, y, width, height, boat_pos){
        var options = {
            restitution:0.8,
            friction:1,
            density:1,
        }
        this.boat_position = boat_pos
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world, this.body)
        this.Image = loadImage("./assets/boat.png")

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.Image, 0, this.boat_position, this.width, this.height)
        pop()
    }
    remove(index){
        World.remove(world, boats[index].body)
        boats.splice(index, 1)

    }
}