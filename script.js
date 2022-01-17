// product
let productsMain = document.querySelectorAll(".product");
let shoeImgs = document.querySelectorAll(".shoe-img");
let shoeTitles = document.querySelectorAll(".shoe-title");
let shoePrices = document.querySelectorAll(".shoe-price");

// product view item
let blockImg = document.querySelector(".block-img");
let productImg = document.querySelector(".product-img");
let productTitle = document.querySelector(".title-product");
let productPrice = document.querySelector(".price-product");

// views
let productViewSection = document.querySelector(".product-view-section");
let heroSectionProducts = document.querySelector(".hero-section-products");

let quantityInputValue = 0;

createProducts();
function createProducts() {
  let text = "";
  for (let i = 0; i < db.length; i++) {
    text += `
        <div class="product">
            <img class="shoe-img" src="${db[i].imgUrl}" alt="">
            <div class="content-div">
            <h3 class="shoe-title">${db[i].shoeTitle}</h3>
            <p class="shoe-price">${db[i].shoePrice}</p>
            </div>
                <div class="buttons-div">
                <button data-index="${i}" class="view-btn">View</button>
                <button data-index="${i}" class="buy-btn">Buy</button>
            </div>
        </div>
        `;
    heroSectionProducts.innerHTML = text;
  }
  let viewBtns = document.querySelectorAll(".view-btn");
  let buyBtns = document.querySelectorAll(".buy-btn");
  for (let i = 0; i < viewBtns.length; i++) {
    viewBtns[i].addEventListener("click", viewProduct);
    buyBtns[i].addEventListener("click", isItemInCart);
    buyBtns[i].addEventListener("click", incrametItemsNum);
  }
}

let text = "";
function viewProduct() {
  let index = this.getAttribute("data-index");
  text += ` <div class="product-view-section">
    <div class="product-container">
     <div class="block-item block-img">
         <button class="btnBack" data-index="${index}">Back</button>
         <img class="display-view-image" src="${db[index].imgUrl}" alt="">
         <button class="btnNext" data-index="${index}">Next</button>

     </div>
     <div class="block-item">
         <h3 class="title-product">${db[index].shoeTitle}</h3>
         <input class="quantity-input" type="number" id="quantity" name="quantity" min="1" max="5" value=1>
         <p class="price-product">${db[index].shoePrice}</p>
         <button id="buy-btn" data-index="${index}">Buy</button><br>
         <button class="previus-page-btn">Back to products</button>
     </div>
    </div>
 </div>`;
  productViewSection.innerHTML = text;
  productViewSection.style.display = "block";
  heroSectionProducts.style.display = "none";

  let previusPageBtn = document
    .querySelector(".previus-page-btn")
    .addEventListener("click", goToProductPage);
  let btnBack = document
    .querySelector(".btnBack")
    .addEventListener("click", slideImageBack);
  let btnNext = document
    .querySelector(".btnNext")
    .addEventListener("click", slideImageNext);
  let buyBtn = document
    .querySelector("#buy-btn")
    .addEventListener("click", addValueToCard);
}

// cart functionality
let cartMargin = document.querySelector(".cart-margin");
let productShow = "";

let itemsNum = 0;
let cartItemsNum = document.querySelector(".items-num");
function incrametItemsNum() {
  itemsNum++;

  cartItemsNum.innerHTML = itemsNum;
}

function addValueToCard() {
  let quantityInput = parseInt(document.querySelector(".quantity-input").value);
  console.log(quantityInput);
  console.log(itemsNum);
  let total = itemsNum + quantityInput;
  cartItemsNum.innerHTML = total;
}

function goToProductPage() {
  location.reload()
}

let counter = 0;
function slideImageBack() {
  let displayViewImage = document.querySelector(".display-view-image");
  let index = this.getAttribute("data-index");
  displayViewImage.src = db[index].imgArray[counter];
  if (counter === 0) {
    console.log("radi if");
    counter = db[index].imgArray.length;
    console.log(counter);
    displayViewImage.src = db[index].imgArray[counter];
  }
  counter--;
}

function slideImageNext() {
  let displayViewImage = document.querySelector(".display-view-image");
  let index = this.getAttribute("data-index");
  counter++;
  displayViewImage.src = db[index].imgArray[counter];

  if (counter === db[index].imgArray.length - 1) {
    counter = 0;

    displayViewImage.innerHTML = db[index].imgArray[counter];
  }
}


let checkCartIndex = [];
function isItemInCart() { 
  let index = this.getAttribute("data-index");
  checkCartIndex.push(index)
  console.log(checkCartIndex);
  
  
  for (let i = 0; i < checkCartIndex.length; i++) {
    
    if (checkCartIndex[i] === index) {

      addToCart(index)
     
    } else { 
    }
    
  }
  
  
}


function addToCart(index) {
  productShow += `
  <div class="cart-product">
  <img class="cart-shoe-img"src="${db[index].imgUrl}"alt="">
  <div class="cart-content-div">
  <h3 class="cart-shoe-title">${db[index].shoeTitle}</h3>
  <p class="cart-shoe-price">${db[index].shoePrice}$</p>
  <h4 class="cart-shoe-quantity">Quantity: ${quantityInputValue}</h4>
  
  </div>
  </div>`;
  cartMargin.innerHTML = productShow;
}