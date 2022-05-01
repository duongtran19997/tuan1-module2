export class Employee{
    private name:string;
    private birthDay:string;
    private address:string;
    private position:string;
    constructor(name:string,birthday:Date,address:string,position:string) {
        this.name=name;
        this.birthDay=birthday.toDateString();
        this.address=address;
        this.position=position;
    }
    getName(){
        return this.name
    }
    getBirthday(){
        return this.birthDay
    }
    getAddress(){
        return this.address
    }
    getPosition(){
        return this.position
    }
    setName(name){
        this.name=name
    }
    setBirthday(birthday){
        this.birthDay=birthday
    }
    setAddress(address){
        this.address=address
    }
   setPosition(position){
        this.position=position
   }
}