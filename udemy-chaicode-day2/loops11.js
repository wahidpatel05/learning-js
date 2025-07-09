let teaCollection = ["green tea", "herbal tea", "chai", "black tea"]

let availableTeas = []

teaCollection.forEach(tea => {
    if (tea === "chai"){
        return;
    }
    availableTeas.push(tea)
});
console.log(availableTeas)