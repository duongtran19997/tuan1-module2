class Circle{
    public radius:number=20;
    public color:string='purple'
    constructor(radius:number,color:string) {
        this.radius=radius;
        this.color=color;
    }
}

let circleList :Circle[]=[]
circleList.push(new Circle(10,'yellow'))
circleList.push(new Circle(15,'green'))
circleList.push(new Circle(20,'purple'))
function showCircle(circle:Circle){
    console.log(`hình tròn có màu ${circle.color}và bán kính là${circle.radius}`)
}
circleList.forEach(showCircle);