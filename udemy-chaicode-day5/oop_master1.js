//Encapsulation
//Class methods can access it but it cannot be access outside class 
//if we want to access it outside class than we have to make a method for it just like getBalance
//functions inside class are called as methods
class bankAccount {
    #balance = 0

    deposit (amount){
        this.amount = amount
        this.#balance += amount
    }

    getBalance(){
        return `$ ${this.#balance}`
    }
}

let account = new  bankAccount()
account.deposit(2000)
// console.log(account.getBalance());

//Absratction
/* 
*/

//Polymorphism

class Bird {
    fly(){
        return `Flying.....`
    }
}

class Penguin extends Bird{
    fly(){
        return `Penguins cant fly`
    }
}

//same methdod name but diff behaviour

let bird = new Bird()
let penguin = new Penguin()
console.log(bird.fly());
console.log(penguin.fly());

