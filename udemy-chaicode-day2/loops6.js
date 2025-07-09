let cities = ["London", "New York", "Paris", "Berlin"]
let visitedCities = []

for (let i = 0; i < cities.length; i++){
    if(cities[i] != "Paris"){
        visitedCities.push(cities[i])
    }else{
        continue
    }

}
console.log(visitedCities
);
