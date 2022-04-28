class StopWatch {
    private startTime:number
    private endTime:number
    constructor(startTime:number,endTime:number) {
        this.startTime=startTime;
        this.endTime=endTime;
    }
    getterStart(){
        return this.startTime
    }
    getterEnd(){
        return this.endTime
    }
    getElapsedTime(){
        return this.endTime - this.startTime
    }
}
 let watch1= new StopWatch(performance.now(),performance.now()+100000)
console.log(watch1.getElapsedTime());