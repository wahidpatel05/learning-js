let tea = ["chai", "green tea", "herbal tea", "black tea"]
let prefferedTea = []

for (const num of tea) {
    if(num === "herbal tea"){
        continue
    }
    prefferedTea.push(num)
    
}
console.log(prefferedTea);
