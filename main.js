// main.js 

// POST request using fetch() 
fetch("https://cors-anywhere.herokuapp.com/https://t3i5ztnt17.execute-api.us-east-2.amazonaws.com/status/status", { 
	
	// Adding method type 
	method: "POST", 
	
	// Adding body or contents to send 
	body: JSON.stringify({  
		"id": "10002"
	}), 
	
	// Adding headers to the request 
	headers: { 
        "Content-type": "text/plain",
} 
}) 

// Converting to JSON 
.then(response => response.json()) 

// Displaying results to console 
.then(json => document.getElementById("demo").innerHTML = JSON.stringify(json)); 
