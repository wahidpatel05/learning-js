let teaCollection = []
let tea

do {
    tea = prompt("enter your fav tea (type stop to exit)")
    if (tea !== "stop"){
        teaCollection.push(tea)
    }
    
} while (tea !== "stop");

console.log(teaCollection)