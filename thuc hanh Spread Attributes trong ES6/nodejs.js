// Example 2: Use spread operator for merging arrays
const cars1 = ["AUDI","BMW","TATA","MERCEDES"];
const cars2 = ['AUDI','BMW',"NISSAN","TOYOTA"];
// copied elements from cars1 and cars2 to cars3 here
const cars3 = [...cars1, ...cars2];

console.log(cars3);