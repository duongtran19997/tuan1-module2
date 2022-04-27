let sum:number = 1;
let array:number[]=[];
function getFibonacci(){
    for (let i = 1; i < 100; i++) {
        sum+=i;
        array.push(sum)
    }
}
function sumFibonacci(){
    for (let i = 0;i<array.length;i++){
         sum += array[i]
    }
}
getFibonacci()
sumFibonacci()

