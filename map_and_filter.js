/*
The map() method is used to create a new array by applying a function to each element of an existing array.

It does not change the original array — it returns a new one.

const newArray = originalArray.map((currentValue, index, array)  {
    // return some value
});

*/
let nums = [1,2,3,4,5,6,7];
// map -> return an array by performing a single opration to lal the elments in an array

let result = nums.map(function(i) {return i*2});
console.log(result);




/* 
output :
   [2,  4,  6, 8,10, 12, 14 ] 
*/
