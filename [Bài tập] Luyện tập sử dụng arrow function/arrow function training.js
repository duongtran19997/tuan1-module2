const inventorys = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
    {type:   "machine", value:   77}
]

// function checkType(inventory){
//     return inventory.type == 'machine'
// }
// function getItem(machine){
//     return machine.value
// }
// function Sums(total,sum){
//     return total+sum
// }
// let machineType =inventorys.filter(checkType)
// let machineValue =  machineType.map(getItem)
// let totalMachineValue = machineValue.reduce(Sums,0)
// console.log(totalMachineValue);
//dùng filter để lọc type machine, dùng map để lấy value, dùng reduce để cộng tổng

//chuyển thành lambda
let totalMachineValue = inventorys.filter((a)=>{return a.type==='machine'}).map((machine)=>{return machine.value}).reduce((total,sum)=>total+sum)
console.log(totalMachineValue);
