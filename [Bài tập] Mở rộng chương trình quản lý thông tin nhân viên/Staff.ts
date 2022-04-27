enum gender{
    male,
    female,
    others,
}

export class Employee{
    public name:string
    public sex:gender
    public birthday:Date;
    public email:string;
    public phoneNumber:number;
    constructor(name:string,
                sex:gender,
                birthday:Date,
                email:string,
                phoneNumber?:number) {
        this.name=name;
        this.sex=sex;
        this.birthday=birthday;
        this.email=email;
        this.phoneNumber=phoneNumber;
    }
}
