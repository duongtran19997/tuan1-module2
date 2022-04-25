function geek(){
    let obj = {name: 'Peter', age: 25, salary: 3000};
    console.log('for(;;)')
    for (let i =0; i<=10;i+=2){
        console.log(i+'')
    }
    console.log('for...of')
    for (let i of ['Ha Noi',20.32,2000]){
        console.log(i+'')
    }
    console.log('for...in')
    for (const i in obj) {
        console.log(obj[i]+'')
    }
}
geek()

// const vehicleOne = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 2021,
//     color: 'red',
//     registration: {
//         city: 'Houston',
//         state: 'Texas',
//         country: 'USA'
//     }
// }
//
// myVehicle(vehicleOne)
//
// function myVehicle({ model, registration: { city,state } }) {
//     const message = 'My ' + model + ' is registered in ' + city + state + '.';
//
//     console.log(message)
// }