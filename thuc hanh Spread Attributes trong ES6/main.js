// cars1 object
const cars1 = {
    Brand : "BMW",
    Color : "RED"
}
// copy cars1 object using spread
// operator to create cars2 object
const cars2 = {...cars1};
// console.log(cars2);

const cars3 = {...cars1,...cars2}
// console.log(cars3)
const cars4={
    brand : 'TOYOTA',
    color : 'BLUE',
}
const cars5={
    brand : 'BMW',
    color : 'RED',
    year : '2004',
}
const cars6 = {...cars5,...cars4}
console.log(cars6);
