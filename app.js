// let promise = fetch('https://dummyjson.com/products');
let prodContain = document.querySelector('#products');

let data = [];

function renderCrad() {
    if (data.length < 1) {
        prodContain.innerHTML = `<span>No Data Found..!</span>`;
        return
    }

    for (let i = 0; i < data.length; i++) {
        console.log(Math.round(data[i].rating))
        console.log(data[i].title)
        prodContain.innerHTML += `
        <div class="card" onClick="explore()">
            <img class="image" src=${data[i].images[0]} alt="">
            <span class="brand">${data[i].brand}</span>
            <h4 class="title">${data[i].title}</h4>
            <span class="rating">
                <i class="fa-solid fa-star" style="color: ${Math.round(data[i].rating) >= 1 ? "orange" : "black"} "></i>
                <i class="fa-solid fa-star"  style="color: ${Math.round(data[i].rating) >= 2 ? "orange" : "black"} "></i>
                <i class="fa-solid fa-star"  style="color: ${Math.round(data[i].rating) >= 3 ? "orange" : "black"} "></i>
                <i class="fa-solid fa-star"  style="color: ${Math.round(data[i].rating) >= 4 ? "orange" : "black"} "></i>
                <i class="fa-solid fa-star"  style="color: ${Math.round(data[i].rating) >= 5 ? "orange" : "black"} "></i> 
            </span>
            <div class="prcBtn">
                <span class="price">$${data[i].price}</span>
                <button class="buyBtn">Buy Now</button>
            </div>
        </div>
        `;
        
    }
}

async function fetchData() {
    try {
        let response = await fetch('https://dummyjson.com/products')
        response = await response.json();
        data = response.products;
        console.log(data)
    }
    catch (error) {
        console.error(error);

    }
}
fetchData().then(function () {
    renderCrad()
})
