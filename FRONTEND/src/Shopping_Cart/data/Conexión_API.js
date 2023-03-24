var endpoint = 'Products/get'
function api_conect() {
    const options = {
        method: 'GET',
    };
    fetch('hhttp://localhost:4000/' + endpoint, options)
        .then(response => response.json())
        // .then(response => {
        //     console.log(response.Products)
        // })
        .catch(err => console.error(err));
}

api_conect()
// import axios from "axios";

// function api_conect() {
//     axios.get('http://localhost:4000/Products/get')
//     .then(response => {
//         return response.Product;
//     })
//     .catch(error => {
//         console.log(error);
//     });
// }
