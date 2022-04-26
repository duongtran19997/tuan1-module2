//b1 cach cu
// let arr=[1,2,3,4,5,6,7];
// let square= (item)=>item*item
// function arraySq(func,arr){
//     let newArr = []
//     arr.forEach((element) => {
//         newArr.push(func(element));
//     });
//     return newArr;
// }
//
// console.log(arraySq(square,arr))
// arr.forEach(arraySq)
// function arraySq(item,index,array){
//     array[index]=item*item;
// }
//
// console.log(arr)
//b2
let arr=[1,2,3,4,5,6,7];
let square =(a)=> a*a;
let newArr = arr.map(square);
console.log(newArr)
