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

// cart
let quantityInput = document.querySelector('.quantity-input')
let quantityInputValue = null;
let cartMargin = document.querySelector('.cart-margin')
let buyBtn2 = document.querySelector('.buy-btn-2')

let circleNum = document.querySelector('.circle-num')


// MORAS DA KREIRAS PA DA SELEKTUJES !!!!!!!!!!!!!!!!!!!!!!!!!!
createProducts()

// buttons


function createProducts() {
    let text = ""

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
    let viewBtns = document.querySelectorAll('.view-btn')
    let buyBtns = document.querySelectorAll('.buy-btn')

        for (let i = 0; i < viewBtns.length; i++) {
            viewBtns[i].addEventListener('click', viewProduct)
            buyBtns[i].addEventListener('click', addToCart)
        }
}
// MORAS DA KREIRAS PA DA SELEKTUJES !!!!!!!!!!!!!!!!!!!!!!!!!!

// addEvent

let index = null

function viewProduct() {
    index = this.getAttribute("data-index")
    buyBtn2.setAttribute("data-index", index)
    buyBtn2.addEventListener('click', addToCart)

    blockImg.innerHTML = `<img class="product-img" src="${db[index].imgUrl}" alt=""></img>`
    
    productTitle.innerHTML = `Model: ` + db[index].shoeTitle
    productPrice.innerHTML = `Price: ` + db[index].shoePrice + `$`

    productViewSection.style.display = "flex"
    heroSectionProducts.style.display = "none"
}

let productShow = "" 
// cart functionality
function addToCart() {
    index = this.getAttribute("data-index")

    quantityInputValue = quantityInput.value
    
    productShow += `
    <div class="cart-product">
            <img class="cart-shoe-img" src="${db[index].imgUrl}" alt="">
            <div class="cart-content-div">
                <h3 class="cart-shoe-title">${db[index].shoeTitle}</h3>
                <p class="cart-shoe-price">${db[index].shoePrice}$</p>
                <h4 class="cart-shoe-quantity">Quantity: ${quantityInputValue}</h4>
                <h4 class="cart-total-amount">${totalAmount} $</h4>
            </div>
    </div>
    `   
    cartMargin.innerHTML = productShow
}


