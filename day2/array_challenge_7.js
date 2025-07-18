let topCities = ["Berlin", "Singapore", "New York"]

// creating a hardcopy of array

//1st way is

let hardcopy = [...topCities]

//2nd way is 

let hardcopy2 = topCities.slice()
topCities.pop()
console.log(hardcopy);
console.log(hardcopy2);

