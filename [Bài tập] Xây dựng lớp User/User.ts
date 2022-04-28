
export class User{
   protected name:string;
   protected email:string;
   public role:number
    constructor(name:string,email:string,role:number) {
        this.name=name
        this.email=email
        this.role=role
    }
    getInfo(){
       let userList =[this.role,this.name,this.email]
        return userList
    }
    isAdmin(){
       if(this.role===1){
           console.log('là Admin')
       }else if(this.role===2){
           console.log('là User')
       }else{
           console.log('nhập sai cú pháp')
       }
    }
    setName(name){
       this.name=name;
    }
    setEmail(email){
       this.email=email;
    }
    setRole(role){
       this.role=role;
    }
}