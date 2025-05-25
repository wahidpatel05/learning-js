let score = "33"
// console.log(typeof score)

let valueInNumnber = Number(score)

// console.log(typeof valueInNumnber)
// console.log(valueInNumnber)

/*
"33" => 33
"33abc" => NaN not a number 
1 => true
0 => false

*/
let isLoggedin = 1

let booleanInput = Boolean(isLoggedin)
// console.log(booleanInput);

// numer => boolean conversion can also be done
/* 
1 => true
0 => false
"" => false
"wahid" => true 
*/

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

let name = "wahid"
console.log("My name is: "+name);