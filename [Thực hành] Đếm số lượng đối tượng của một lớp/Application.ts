class  Application{
    private name:string
    static count:number=0
    constructor(name:string) {
        this.name=name
        Application.count++
    }

}

console.log(Application.count);
let a1 = new Application('a1')
let a2 = new Application('a2')
console.log(Application.count);