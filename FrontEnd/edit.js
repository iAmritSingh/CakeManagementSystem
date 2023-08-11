// api url
const api_url = "http://localhost:3000/product/";

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

var I = {};
// Function to define innerHTML for HTML table
function show(data) {


    // Loop to access all rows
    for (let r of data) {
        document.forms["myforms"]["Item"].value = r.Item;
        document.forms["myforms"]["Name"].value = r.Name;
        document.forms["myforms"]["Email"].value = r.Email;
        document.forms["myforms"]["Price"].value = r.Price;
        document.forms["myforms"]["Desc"].value = r.Desc;


    }


}




// function de(T) {
//     I = T;
//     // window.location.href = "./EditProduct.html";
//     // <a href="./EditProduct.html"></a>
// }
// async function del(Item) {
//     // await fetch('http://localhost:3000/product/delete/' + Item, { method: 'DELETE' });
//     const response = await fetch('http://localhost:3000/product/' + Item, {
//         method: 'DELETE',
//         headers: {
//             'Content-type': 'application/json'
//         }
//     });
//     location.reload();

// }
// // async function ed(I) {
// // await fetch('http://localhost:3000/product/delete/' + Item, { method: 'DELETE' });
// // const response = await fetch('http://localhost:3000/product/' + Item, {
// //     method: 'DELETE',
// //     headers: {
// //         'Content-type': 'application/json'
// //     }
// // });
// // location.reload();


// // }

// function validateForm() {
//     // let x = document.forms["myForm"]["fname"].value;
//     // if (x == "") {
//     //   alert("Name must be filled out");
//     //   return false;
//     // }
//     console.log(I);
//     document.forms["myforms"]["Item"].value = I.Item;
//     document.forms["myforms"]["Name"].value = I.Name;
//     document.forms["myforms"]["Email"].value = I.Email;
//     document.forms["myforms"]["Price"].value = I.Price;
//     document.forms["myforms"]["Desc"].value = I.Desc;
// }
// validateForm();
