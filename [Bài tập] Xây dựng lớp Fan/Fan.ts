enum Speed{'slow'=1,'medium','fast'}
export class Fan{
    private speed:Speed=1
    private on:boolean=false
    private radius:number=5
    private color:string='blue'

constructor(speed:Speed,on:boolean,radius:number,color:string) {
        this.speed=speed;
        this.on=on;
        this.radius=radius;
        this.color=color;
}
    getterSpeed(){
        return this.speed
    }
    getterOn(){
        return this.on
    }
    getterRadius(){
        return this.radius
    }
    getterColor(){
        return this.color
    }
    setSpeed(speed:Speed){
        this.speed=speed
    }
    setOn(on:boolean){
        this.on=on
    }
    setRadius(radius:number){
        this.radius=radius
    }
    setColor(color:string){
        this.color=color
    }
    toString(){
        let status:any[]=[]
        if(this.on===true){
            status.push(this.radius,this.on,this.color,this.speed)
            console.log(status);
            console.log('fan is on')
        }else{
            this.speed=0
            status.push(this.radius,this.on,this.color,this.speed)
            console.log('fan is off')
            console.log(status);
        }
    }
}