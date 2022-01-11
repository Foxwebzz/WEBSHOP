let cartBtn = document.querySelector('.cart-btn')
let closeBtn = document.querySelector('.close-btn')
let cartWindow = document.querySelector('.cart-window')

cartBtn.addEventListener('click', function() {
    cartWindow.classList.add('active-toggle')
    cartBtn.style.display = 'none'
})
closeBtn.addEventListener('click', function() {
    cartWindow.classList.remove('active-toggle')
    cartBtn.style.display = 'block'
})