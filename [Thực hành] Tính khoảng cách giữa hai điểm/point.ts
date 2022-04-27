class Point{
    x:number
    y:number
    constructor(x:number,y:number) {
        this.x=x
        this.y=y
    }
    displayName='Point'
    distance(b){
        const dx=this.x-b.x
        const dy=this.y-b.y
        return Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2))
    }
}
let p1 = new Point(5,5)
let p2 = new Point(10,10)
console.log(p1.displayName);
console.log(p1.distance(p2))