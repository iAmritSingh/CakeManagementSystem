// api url
const api_url = "http://localhost:3000/chart/";

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);

    show(data);

}
// Calling that async function
getapi(api_url);

var I;
// Function to define innerHTML for HTML table
function show(data) {
    let tab =
        `<tr>
		<th>Item No</th>
		<th>Name</th>
		
		<th>Price</th>
		<th>Desc</th>
		
		<th></th>
		</tr>`;

    // Loop to access all rows
    for (let r of data) {
        tab += `<tr>
	<td>${r.Item} </td>
	<td>${r.Name} </td>
	<td>${r.Price}</td>
	<td>${r.Desc}</td>		
    
		
	<td><a class="btn btn-primary" onclick="del(${r})"  role="button">Cancel</a></td>		
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("Tables").innerHTML = tab;

}






async function del(It) {
    // POST request using fetch()
    await fetch("http://localhost:3000/chart/add", {

        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({
            It
        }),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    location.reload();

}


