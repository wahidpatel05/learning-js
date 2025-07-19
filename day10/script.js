document.getElementById("clickMeButton").
addEventListener("click", function(){
    
})

let list = document.getElementById("teaList").
addEventListener('click', function(event){
    if (event.target && event.target.matches('.teaItem')){
        alert ("you selected " + event.target.textContent)
    }
    
})

document.getElementById("feedbackForm").addEventListener('submit',function(event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value
    console.log(feedback)
    document.getElementById("feedbackDisplay").textContent = `Feedback is: ${feedback}`
    document.getElementById("feedbackInput").value = ""
})

