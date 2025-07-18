let availableTeas = ["green tea", "black tea", "chai", "oolong tea"]
let selectedTeas = []

for(let i = 0; i < availableTeas.length; i++){
    if(availableTeas[i] == "chai"){
        break
    }
    selectedTeas.push(availableTeas[i])
}
console.log(selectedTeas);
