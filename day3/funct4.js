
function createTeaMaker(){
    return function Teatype(teatype){
        return `Making ${teatype}`
    }
}

let tea = createTeaMaker()

console.log(tea("green tea"));
