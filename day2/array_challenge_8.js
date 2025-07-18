let europeanCities = ["Paris", "Rome"]
let asianCities = ["Tokyo", "Bangkok"]

let worldCities = europeanCities.concat(asianCities)

console.log( worldCities);

let worldCities2 = [...europeanCities,...asianCities]
console.log(worldCities2)

;
