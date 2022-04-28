export class Product {
   private name:string
   private price:number
    constructor(name:string,price:number) {
        this.name=name;
        this.price=price;
    }
    getName(){
       return this.name
    }
    getPrice(){
       return this.price
    }
    setName(name:string){
       this.name=name
    }
    setPrice(price:number){
       this.price=price
    }
}