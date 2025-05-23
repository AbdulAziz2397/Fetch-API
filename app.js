// let promise = fetch('https://dummyjson.com/products');
let prodContain = document.querySelector('#products');

let data = [];

function renderCrad() {
    if (data.length < 1) {
        prodContain.innerHTML += `<span>No Data Found..!</span>`;
        return
    }

    for (let i = 0; i < data.length; i++) {
        
        prodContain.innerHTML += `
        <div class="card">
            <img class="image" src="" alt="">
            <span class="brand"></span>
            <h4 class="title"></h4>
            <span class="price"></span>
        </div>
        `;
    }
}

async function fetchData() {
    try {
        let response = await fetch('https://dummyjson.com/products')
        response = await response.json();
        data = response;
        console.log(data.products)
    }
    catch (error) {
        console.error(error);

    }
}
fetchData().then(function () {
    renderCrad()
})
