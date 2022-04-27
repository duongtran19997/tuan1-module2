let sum:number = 0;
let array:number[]=[];
let i = 0;

    function fibo(a:number) {
        if (a <= 1)
            return 1;
           return  fibo(a - 1) + fibo(a - 2)
    }

    function sumFibo(n:number){
        for(i=0;i<=n;i++){
            sum+= fibo(i)
        }
      return sum
    }

console.log(sumFibo(20))
