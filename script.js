// product
let productsMain = document.querySelectorAll('.product')
let shoeImgs = document.querySelectorAll('.shoe-img')
let shoeTitles = document.querySelectorAll('.shoe-title')
let shoePrices = document.querySelectorAll('.shoe-price')

// product view item
let blockImg = document.querySelector('.block-img')
let productImg = document.querySelector('.product-img')
let productTitle = document.querySelector('.title-product')
let productPrice = document.querySelector('.price-product')

// views
let productViewSection = document.querySelector('.product-view-section')
let heroSectionProducts = document.querySelector('.hero-section-products')

// MORAS DA KREIRAS PA DA SELEKTUJES !!!!!!!!!!!!!!!!!!!!!!!!!!
let text = ""
createProducts()

// buttons
let viewBtns = document.querySelectorAll('.view-btn')
let buyBtns = document.querySelectorAll('.buy-btn')

function createProducts() {

    for (let i = 0; i < db.length; i++) {
        text += `
        <div class="product">
            <img class="shoe-img" src="${db[i].imgUrl}" alt="">
            <div class="content-div">
                <h3 class="shoe-title">${db[i].shoeTitle}</h3>
                <p class="shoe-price">${db[i].shoePrice}$</p>
            </div>
            <div class="buttons-div">
                <button data-index="${i}" class="view-btn">View</button>
                <button data-index="${i}" class="buy-btn">Buy</button>
            </div>
        </div>
        `
        heroSectionProducts.innerHTML = text
    }
}
// MORAS DA KREIRAS PA DA SELEKTUJES !!!!!!!!!!!!!!!!!!!!!!!!!!

// addEvent
for (let i = 0; i < viewBtns.length; i++) {
    viewBtns[i].addEventListener('click', viewProduct)
}

let index = null

function viewProduct() {
    index = this.getAttribute("data-index")

    blockImg.innerHTML = `<img class="product-img" src="${db[index].imgUrl}" alt=""></img>`
    
    productTitle.innerHTML = `Model: ` + db[index].shoeTitle
    productPrice.innerHTML = `Price: ` + db[index].shoePrice + `$`

    productViewSection.style.display = "flex"
    heroSectionProducts.style.display = "none"
}


let productShow = ""
// cart functionality
let quantityInput = document.querySelector('.quantity-input')
let qunatityValue = quantityInput.value
let cartMargin = document.querySelector('.cart-margin')
let buyBtn2 = document.querySelector('.buy-btn-2')


buyBtn2.addEventListener('click', addToCart)

for (let i = 0; i < buyBtns.length; i++) {
    buyBtns[i].addEventListener('click', addToCart)
}

function addToCart() {
    index = this.getAttribute("data-index")

    productShow += `
    <div class="cart-product">
            <img class="cart-shoe-img" src="${db[index].imgUrl}" alt="">
            <div class="cart-content-div">
                <h3 class="cart-shoe-title">${db[index].shoeTitle}</h3>
                <p class="cart-shoe-price">${db[index].shoePrice}$</p>
                <h4 class="cart-shoe-quantity">Quantity: ${qunatityValue}</h4>
            </div>
    </div>

    `   
    cartMargin.innerHTML = productShow
    
}