const Person = {
    name: "Wahid",
    greet(){
        console.log(`hi, this is ${this.name}`)
    }
}

Person.greet()

let Transfer = Person.greet
Transfer()

let bind = Person.greet.bind(Person)
bind()