class QuadraticEquation{
   public a:number
   public b:number
   public c:number
    constructor(a:number,b:number,c:number) {
       this.a=a
        this.b=b
        this.c=c
    }
    getDiscriminant(){
       let delta = this.b*2- 4*this.a*this.c
        return delta
    }
    getRoot(delta){
       let arrRoot:number[]=[]
       if(delta>0){
            let root1 = (-this.b+Math.pow(delta,0.5))/2*this.a
            let root2 = (-this.b-Math.pow(delta,0.5))/2*this.a
           arrRoot.push(root1,root2)
           return arrRoot
       }else if(delta==0){
           let root = -this.b/this.a
           return root
       }else{
           throw new Error('The equation has no roots')
       }

    }
}

let equation1 = new QuadraticEquation(1,2,1)
console.log(equation1.getRoot(equation1.getDiscriminant()));