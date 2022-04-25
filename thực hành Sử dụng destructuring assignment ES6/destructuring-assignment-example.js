// let names =['alpha','beta','gamma','delta']
// let [,firstName,secondName]= names;
// console.log(firstName)
// console.log(secondName)

//Bước 1
// let [firstName,secondName] = ['alpha','beta','gamma','delta'];
// console.log(firstName);
// console.log(secondName);

//TURN 2
// let [firstName,,secondName] = ['alpha','beta','gamma','delta'];
// console.log(firstName);
// console.log(secondName);

//TURN 3 ap dung rest(...)
// let [firstName,...secondName] = ['alpha','beta','gamma','delta'];
// console.log(firstName)
// console.log(secondName)

//TURN 4  swap hai destructuring assignment
// let [firstName,secondName] = ['alpha','beta','gamma','delta']
// console.log(firstName);
// console.log(secondName);
// [firstName,secondName]=[secondName,firstName]
// console.log(firstName);
// console.log(secondName);

//TURN 5 Trích xuất từ một mảng trả về từ hàm
// function Namelist(){
//     return['alpha','beta','gamma','delta']
// }
// let [firstName,secondName]= Namelist;
// console.log(firstName)
// console.log(secondName)

//TURN 6 GẮN BIẾN TỪ ĐỐI TƯỢNG
// let marks = {x:21,y:30,z:32}
// const{x,y,z}=marks
// console.log(x)
// console.log(y)
// console.log(z)

//turn 7 trích xuất đối tượng lồng nhau
const marks = {
    section1: { alpha: 15, beta: 16},
    section2: { alpha: -31, beta: 19 }
};
const { section1 : { alpha: alpha1, beta: beta1 }} = marks;
console.log(alpha1, beta1)