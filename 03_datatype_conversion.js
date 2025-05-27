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
// console.log("My name is: "+name);

const myName = new String('wahid');
console.log(myName);

// methods of the strings
console.log(`the string ends with d? ${myName.endsWith("d")}`)
console.log(`the string length is ${myName.length}`);
console.log(`${myName.concat(" patel")}`)
console.log(`${myName.charCodeAt(0)}`); //it returns unicode value it is between 0 and 

// let user = new String('{')
// console.log(`${user.charCodeAt(0)}`);

console.log(`${myName.toUpperCase()}`);

// substring doesnt take negative values but SLICE method takes negative values just like python





