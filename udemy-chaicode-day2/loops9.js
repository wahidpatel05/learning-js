let citiesPoppulation = {
    "London"  : 890000,
    "New York" : 9400900,
    "Berlin" :3500000,
    "Paris" : 22000000
}

let cityPoppulation = {}

for (const city in citiesPoppulation) {
    if(city === "Berlin"){
        break
    }
   cityPoppulation[city] = citiesPoppulation[city]
        
    
}
console.log(cityPoppulation);
