function fetchData(){
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            let success = true
            if(success){
                resolve({name: "Wahid", URL: "httpl://localhost8080"})
            }
        }, 3000);
    })
}

async function getData() {
    try {
        console.log("Fetching data....")
        let data = await fetchData()
        console.log("Data Fetched successfully");
        console.log("Displaying the data")
        setTimeout(() => {
            console.log(data);
        }, 3000);
        
        
        
    } catch (error) {
        console.log("Error",error)
    }
    
}
getData()