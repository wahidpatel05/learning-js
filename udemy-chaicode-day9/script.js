//example 1
let hold = document.getElementById("changeTextButton").
addEventListener("click", function (){
   let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "the paragraph is changed"
    
})

//example 2
document.getElementById("highlightFirstCity").addEventListener("click", function(){
   let cities =  document.getElementById("citiesList")
   cities.firstElementChild.classList.add("highlight")
})

//example 3
document.getElementById("changeOrder").addEventListener("click", function(){
    let order = document.getElementById("coffeeType");
    order.textContent = "Espresso"
    order.style.borderStyle = "dotted";
    // order.style.borderRadius = "30px";
    order.style.color = "purple";

})

// example 4
document.getElementById("addNewItem").
addEventListener("click", function(){
     let newItem = document.createElement("li")
     newItem.textContent = "Eggs"
     document.getElementById("shoppingList").appendChild(newItem)

})

//example 5

document.getElementById("removeLastTask").
addEventListener("click", function(){
    let taskList = document.getElementById("taskList")
    let lastElement = taskList.lastChild

    lastElement.remove()
})