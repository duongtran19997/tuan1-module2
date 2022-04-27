enum gender{
    male,
    female,
    others,
}
class Staff{
    public name:string
    public sex:gender
    public birthday:Date;
    public email:string;
    public phoneNumber:number;
    constructor(name:string,sex:gender,birthday:Date,email:string,phoneNumber:number) {

    }
}
