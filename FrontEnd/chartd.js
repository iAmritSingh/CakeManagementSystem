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
    
		
	<td><a class="btn btn-primary" onclick="del(${r.Item})"  role="button">Cancel</a></td>		
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("Tables").innerHTML = tab;

}

async function del(Item) {
    // await fetch('http://localhost:3000/product/delete/' + Item, { method: 'DELETE' });
    const response = await fetch('http://localhost:3000/chart/' + Item, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    });
    location.reload();

}


