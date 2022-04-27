class Shape{
    public color:string
    public filled:boolean
    constructor(color:string,filled:boolean) {
        this.color=color;
        this.filled=filled;
    }
}
export default Shape
class Circle{
    public color:string
    public filled:boolean
    public radius:number;
    constructor(color:string,filled:boolean,radius:number) {
        this.color=color;
        this.filled=filled;
        this.radius=radius;
    }
    getArea(){
        return this.radius * this.radius * Math.PI
    }
    getPerimeter(){
        return 2*this.radius*Math.PI
    }
}
