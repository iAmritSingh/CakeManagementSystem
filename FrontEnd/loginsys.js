

var em = {
    Email: "",
    Password: ""
}
const login_url = "http://localhost:3000/api/auth/login";
const api_url = "http://localhost:3000/product/";
const apichart_url = "http://localhost:3000/chart/";
const apiorderadd_url = "http://localhost:3000/order/";
const apiorderget_url = "http://localhost:3000/order/show";
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("subn").addEventListener("click", async function (event) {
        event.preventDefault();
        em.Email = document.forms["adl"]["Email"].value;
        em.Password = document.forms["adl"]["Password"].value;
        var check = await logincheck(login_url);
        if (check == 1) {
            await getapi(api_url);
            document.getElementById('Loginid').style.display = "none";
            document.getElementById('UserId').style.display = "block";

        }
    });
    document.getElementById("menudisplay").addEventListener("click", async function (event) {
        event.preventDefault();
        // em.Email = document.forms["adl"]["Email"].value;
        // em.Password = document.forms["adl"]["Password"].value;
        // var check = await logincheck(login_url);
        // if (check == 1) {
        await getapi(api_url);
        // document.getElementById('Loginid').style.display = "none";
        // document.getElementById('UserId').style.display = "block";

        // }
    });
    document.getElementById("chartdis").addEventListener("click", async function (event) {
        event.preventDefault();
        // em.Email = document.forms["adl"]["Email"].value;
        // em.Password = document.forms["adl"]["Password"].value;
        // var check = await logincheck(login_url);
        // if (check == 1) {
        await getchartapi(apichart_url);
        // document.getElementById('Loginid').style.display = "none";
        document.getElementById('contshop').style.display = "block";
        document.getElementById('orderid').style.display = "block";

        // }
    });
    document.getElementById("contshopbtn").addEventListener("click", async function (event) {
        event.preventDefault();
        // em.Email = document.forms["adl"]["Email"].value;
        // em.Password = document.forms["adl"]["Password"].value;
        // var check = await logincheck(login_url);
        // if (check == 1) {
        document.getElementById('contshop').style.display = "none";
        document.getElementById('orderid').style.display = "none";
        await getapi(api_url);
        // document.getElementById('Loginid').style.display = "none";
        // document.getElementById('UserId').style.display = "block";

        // }
    });
    document.getElementById("orderid").addEventListener("click", async function (event) {
        event.preventDefault();
        // em.Email = document.forms["adl"]["Email"].value;
        // em.Password = document.forms["adl"]["Password"].value;
        // var check = await logincheck(login_url);
        // if (check == 1) {

        await addtoorders(apiorderadd_url);
        // document.getElementById('Loginid').style.display = "none";
        // document.getElementById('UserId').style.display = "block";

        // }
    });
    document.getElementById("orderdis").addEventListener("click", async function (event) {
        event.preventDefault();
        // em.Email = document.forms["adl"]["Email"].value;
        // em.Password = document.forms["adl"]["Password"].value;
        // var check = await logincheck(login_url);
        // if (check == 1) {

        await getorders(apiorderget_url);
        // document.getElementById('Loginid').style.display = "none";
        // document.getElementById('UserId').style.display = "block";

        // }
    });

})
async function logincheck(url) {
    // POST request using fetch()
    var flag = 0;
    await fetch(url, {

        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify(em),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(res =>
            res.json()).then(d => {
                if (d.message != "Ok") {
                    alert(d.message);
                    flag = 0;
                }
                else {
                    console.log(d);
                    flag = 1;

                }
                // return d;


            })
    console.log(flag);
    return flag;

}


// document.getElementById("subn").addEventListener("click", function (event) {
//     event.preventDefault();
//     em = document.getElementById("Email").value;
//     console.log(em);

// });
// api url


// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);

    show(data);

}
async function getorders(url) {

    var flag = 0;
    const response = await fetch(url, {

        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({ Email: em.Email }),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    var data = await response.json();
    show2(data);

}
// Calling that async function


async function getchartapi(url) {
    // POST request using fetch()
    var flag = 0;
    const response = await fetch(url, {

        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({ Email: em.Email }),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    var data = await response.json();
    show1(data);


}
async function addtoorders(url) {
    // POST request using fetch()

    const response = await fetch(url, {

        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({ Email: em.Email }),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    var data = await response.json();
    alert(data.message);
    if (data.message == "order placed") {

        await del2();
    }


}

async function del2() {
    // await fetch('http://localhost:3000/product/delete/' + Item, { method: 'DELETE' });
    const response = await fetch('http://localhost:3000/chart/' + em.Email, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    });
    var data = await response.json();
    // alert(data.message);
    await getchartapi(apichart_url);
    // location.reload();

}


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
    
		
	<td><a class="btn btn-primary" onclick="del(${r.Item},\'${r.Name}\',${r.Price},\'${r.Desc}\')"  role="button">Add to Chart</a></td>		
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("Tables").innerHTML = tab;

}



async function del(I, N, P, D) {
    // POST request using fetch()
    await fetch("http://localhost:3000/chart/add", {

        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({
            Item: I,
            Name: N,
            Price: P,
            Desc: D,
            Email: em.Email
        }),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(res =>
            res.json()).then(d => {
                alert(d.message);
            })


}







function show1(data) {
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
    
		
	<td><a class="btn btn-primary" onclick="del1(${r.Item})"  role="button">Cancel</a></td>		
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("Tables").innerHTML = tab;

}

async function del1(Item) {
    // await fetch('http://localhost:3000/product/delete/' + Item, { method: 'DELETE' });
    const response = await fetch('http://localhost:3000/chart/' + Item + '/' + em.Email, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    });
    var data = await response.json();
    alert(data.message);
    await getchartapi(apichart_url);
    // location.reload();

}
function show2(data) {
    let tab =
        `<tr>
		<th>Item No</th>
		<th>Name</th>
		
		<th>Price</th>
		<th>Desc</th>
		<th>Email</th>
		<th>Address</th>
		
		<th>Status</th>
		</tr>`;

    // Loop to access all rows
    for (let r of data) {
        tab += `<tr>
	<td>${r.Item} </td>
	<td>${r.Name} </td>
	<td>${r.Price}</td>
	<td>${r.Desc}</td>		
	<td>${r.Email}</td>		
	<td>${r.Address}</td>		
	<td>${r.Status}</td>		
    
		
	<td><a class="btn btn-primary" onclick="editorder(${r.Item},\'${r.Email}\',\'Cancellation is pending\')"  role="button">Cancel</a></td>		
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("Tables").innerHTML = tab;

}

async function editorder(i, e, s) {

    var flag = 0;

    const response = await fetch('http://localhost:3000/order/edit', {

        // Adding method type
        method: "PUT",

        // Adding body or contents to send
        body: JSON.stringify({
            Item: i,
            Email: e,
            Status: s
        }),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    var data = await response.json();
    alert(data.message);
    await getapi(api_url);



}
