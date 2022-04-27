var number = [0, 2, 3, 5, 6, 7, 9, 10];
var array = [];
var i = 0;
while (i < 11) {
    if (number.indexOf(i) === -1) {
        array.push(i);
        i++;
    }
    else {
        i++;
    }
}
console.log(array);
