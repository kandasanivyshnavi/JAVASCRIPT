/*
A function is a block of code designed to perform a particular task. You can define it once and reuse it whenever you want.
*/

function addNum(num1, num2)
{
    return num1+num2;
}

console.log(addNum(2,3));

// or
function addNum(num1, num2)
{
    return num1+num2;
}

let a = addNum(2,3);
console.log(a);

// or
function addNum(num1, num2)
{
    console.log(num1+num2);
}

addNum(1,2);
