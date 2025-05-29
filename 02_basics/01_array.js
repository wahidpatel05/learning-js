// array

const myArr = [0, 1, "wahid", "patel"]

const myArr2 = new Array(1,2,3,4)

myArr2.push(5)

// console.log(myArr[2]);
console.log(myArr2)


// in slice the original array in unchanged 
// but in splice the original array is changed
console.log("The first array without changing ",myArr)
const myNewArray1 = myArr.slice(1,3)
console.log(`The first array after using slice ${myArr}`)
console.log(myNewArray1)

const myNewArray2 = myArr.splice(1,3)
console.log(`the first array after using splice ${myArr}`)
console.log(typeof myNewArray2)

