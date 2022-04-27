export class Book{
    public name:string;
    public id:string;
    constructor(name:string,id:string) {
        this.name=name;
        this.id=id;
    }
    getName(){
        return this.name
    }
    setName(name:string):void{
        this.name = name
    }
    getId(){
        return this.id
    }
}