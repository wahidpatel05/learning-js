// Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.

class BankAccount {
  #balance = 0; // ✅ Private field

  constructor(initbalance) {
    if (initbalance < 0) {
      throw new Error("Invalid balance"); // ✅ Use throw instead of console.error
    }
    this.#balance = initbalance;         // ✅ Store in #balance
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this.#balance += amount;             // ✅ Access #balance
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdraw amount must be positive");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient balance");
    }
    this.#balance -= amount;
  }

  get balance() {
    return this.#balance;                //  Getter fixed
  }

  set balance(amount) {
    if (amount < 0) {
      throw new Error("Balance cannot be negative");
    }
    this.#balance = amount;              //  Setter fixed
  }
}



// Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.

class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {               // ✅ Inherit from Shape
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;     // ✅ Actual calculation
  }
}

class Rectangle extends Shape {
  constructor(length, breadth) {
    super();
    this.length = length;
    this.breadth = breadth;
  }

  area() {
    return this.length * this.breadth;     // ✅ Actual calculation
  }
}
