let repliceFood:{tittle:string,meal:number,ingredients:string[]} = {
   tittle:'Sườn xào chua ngọt',
    meal:2,
    ingredients:['400 g sườn thăn', '4 tbsp nước mắm', '5 tsp đường', '5 tsp nước cốt chanh',
        '1/3 bát nước sôi', 'Hành khô, tỏi, ớt, hành lá', '2 quả cà chua', 'Hành tây (ớt chuông)']
}
console.log('mon an'+repliceFood.tittle);
console.log('khau phan'+repliceFood.meal);
for (let i = 0; i < repliceFood.ingredients.length; i++) {
    console.log(repliceFood.ingredients[i]);
}