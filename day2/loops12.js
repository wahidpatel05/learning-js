let teas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]

let shortTeas = []

for (const tea of teas) {
    if (tea.length > 10){
        break
    }
    shortTeas.push(tea)
}
console.log(shortTeas);
