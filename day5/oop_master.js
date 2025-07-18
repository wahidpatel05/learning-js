Array.prototype.Wahid = function(){
    return `Custom method ${this}`
}
let myArray = [1,2,3,4]
// console.log(myArray.Wahid());

//creating class
class Vehicle {
    constructor(make,model){
        this.make = make
        this.model = model
    }
    start(){
        return `this ${this.model} is a car from ${this.make}`
    }
}

//inheritence

class Car extends Vehicle{
    drive(){
        return `${this.make}:ths is an example of inheritence`
    }
}

let myCar = new Car("Ford","Mustang")
// console.log(myCar.start());
// console.log(myCar.drive());


