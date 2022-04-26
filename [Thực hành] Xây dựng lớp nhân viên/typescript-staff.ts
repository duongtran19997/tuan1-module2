class Staff{public name:string;
            public email:string;
            public age:number;
    constructor(name:string,email:string,age:number) {
        this.name=name
        this.email=email
        this.age=age
    }
    staff():void{
        console.log(this.name+ this.email+this.age)
    }
    setName(name:string):void{
        this.name=name;
    }
    getName():string{
        return this.name;
    }
    setEmail(email:string):void{
        this.email=email;
    }
    getEmail():string{
        return this.email;
    }
    setAge(age:number):void{
        this.age=age;
    }
    getAge():number{
        return this.age
    }
}
let Duong= new Staff("Duong",'duonga2qp@gmail.com',25);
Duong.getAge()
let nameStaff = Duong.getName();


console.log(nameStaff); // Staff 1


Duong.setName('Duong2');


let currentNameStaff = Duong.getName();


console.log(currentNameStaff) //