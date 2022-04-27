var sum = 0;
var array = [];
var i = 0;
function fibo(a) {
    if (a <= 1)
        return 1;
    return fibo(a - 1) + fibo(a - 2);
}
function sumFibo(n) {
    for (i = 0; i <= n; i++) {
        sum += fibo(i);
    }
    return sum;
}
console.log(sumFibo(20));
