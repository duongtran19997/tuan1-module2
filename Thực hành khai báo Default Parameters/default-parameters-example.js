//B1 Cách cũ

function multiply(a, b) {
    return a * b;
}

let num1 = multiply(5);
console.log(num1);
let num2 = multiply(5, 8);
console.log(num2);

//B2 cach moi
function multiply2(a, b = 2) {
    return a * b;
}

let num3 = multiply2(5);
console.log(num3);
let num4 = multiply2(5, 4)
console.log(num4);
//B3 áp dụng cả với class
class Geeks {
    constructor(a, b = 3) {
        console.log(a * b);
    }
}
let obj = new Geeks(5);
let obj1 = new Geeks(5, 4);