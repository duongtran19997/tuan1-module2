function sum(x,y,z){
    return x+y+z;
}
const number =[1,2,3];
console.log(sum.apply(null,number))//null Là đối tượng 2 nhưng k có

//cach 2 dung spread syntax
// function sum1(x,y,z){
//     return x+y+z;
// }
// const number1 = [1,2,3];
// console.log(sum(...number1));

//b3


// let a = [1, 2];
// a.push([1, 2, 3]);
// console.log(a);//tao ra mot mang da chieu

//b4 add phần tử vào mảng k cần dùng apply

// let a = [1, 2];
// let b= [1,2,3];
// a.push(...b);
// console.log(a);

//b5 copy mảng
let a = [1, 2];
let b= [1,2,3];
a = [...b];
console.log(a);

//b6 cop đối tượng
let obj1={a:1, b:2};
let obj2 = {...obj1};
console.log(obj2);

//b7