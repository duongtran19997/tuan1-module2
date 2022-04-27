var sum = 1;
var array = [];
function getFibonacci() {
    for (var i = 1; i < 100; i++) {
        sum += i;
        array.push(sum);
    }
}
function sumFibonacci() {
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
}
getFibonacci();
sumFibonacci();
