let savedCount = localStorage.getItem("BagCount");
let bagCount = savedCount ? Number(savedCount) : 0;

document.getElementById("count-number").innerText = bagCount;

let container = document.getElementById("products");
let pageCategory = container.dataset.category;
let cardsHTML = "";


for (let i = 0; i < productsList.length; i++) {
    let item = productsList[i];

    if (pageCategory === "trending" && item.trending === true) {
        cardsHTML += createCard(item);
    }

    else if (item.category === pageCategory) {
        cardsHTML += createCard(item);
    }
}

container.innerHTML = cardsHTML;

function createCard(item) {
    return `
        <div class="card">
            <img src="${item.image}" alt="${item.title}">
            <div class="brand">${item.brand}</div>
            <div class="title">${item.title}</div>
            <div class="price">${item.price}</div>
            <button class="add-btn" onclick="addToBag()">Add To Bag</button>
        </div>
    `;
}

function addToBag() {
    bagCount = bagCount + 1;
    localStorage.setItem("BagCount", bagCount);

    document.getElementById("count-number").innerText = bagCount;
    alert("Item added to bag!");
}
