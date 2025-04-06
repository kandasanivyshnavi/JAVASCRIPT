/* 
 == (Double Equals) – Loose Equality
Compares values only.

Performs type conversion if the types are different.


console.log(5 == '5');           // true ✅ (string '5' is converted to number 5)
console.log(null == undefined); // true ✅ (they are loosely equal)


 === (Triple Equals) – Strict Equality
Compares both value and type.

No type conversion is done.

javascript
Copy
Edit
console.log(5 === '5');       // false ❌ (number !== string)
console.log(5 === 5);         // true ✅ (both value and type match)
*/
/*
✅ && and || → Logical Operators
These are used in conditional (boolean) logic:

🔹 && (Logical AND)
Returns true only if both sides are true.

Stops early if the first condition is false.

javascript
Copy
Edit
true && true     // true
true && false    // false

let a = 10;
console.log(a > 5 && a < 20);  // true ✅
🔸 || (Logical OR)
Returns true if at least one side is true.

Stops early if the first condition is true.

javascript
Copy
Edit
false || true    // true
false || false   // false

let b = 15;
console.log(b < 10 || b > 12);  // true ✅


*/

// ternary operator

let a = 10;
let color =  a< 9 ? 'red' : 'green' ;
console.log(color);
/* syntax :
condition ? expression_if_true : expression_if_false;
*/

// green 
