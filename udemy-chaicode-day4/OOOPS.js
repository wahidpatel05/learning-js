let computer = {
    cpu : 12
}
let LG = {
    screen : "HD",
    __proto__ : computer
}
let hp = {}

console.log(`lg `, LG.__proto__)

let maserati = {
    tyres : 4
}

let porshe = {
    type : "mannual"
}

Object.setPrototypeOf(porshe, maserati)
console.log(`porshe `, Object.getPrototypeOf(porshe));
