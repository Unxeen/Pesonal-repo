const selectElement = function(selector){
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Please make sure that ${selector} is a valid element.`)
}

const selectElements = function(selector){
    const element = document.querySelectorAll(selector);
    if(element) return element;
    throw new Error(`Please make sure that ${selector} is a valid element.`)
}

//menu pop-up

const menuToggle = selectElement('.menu-toggle-btn')
const mobileMenu = selectElement('.mobile-menu')

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
})

//input focus

const navForm = selectElement('#search-form')
const navSearchInput = selectElement('#nav-search-input')
const navSearchIcon = selectElement('#nav-search-icon')

const heroForm = selectElement('#hero-form')
const heroSearchInput = selectElement('#hero-search-input')
const heroSearchIcon = selectElement('#hero-search-icon')

navSearchInput.addEventListener('focus', () => {
    navForm.classList.add('focused')
    navSearchIcon.classList.add('focused')
    navSearchInput.addEventListener('blur', () => {
        navForm.classList.remove('focused')
        navSearchIcon.classList.remove('focused')
    })
})

heroSearchInput.addEventListener('focus', () => {
    heroForm.classList.add('focused')
    heroSearchIcon.classList.add('focused')
    heroSearchInput.addEventListener('blur', () => {
        heroForm.classList.remove('focused')
        heroSearchIcon.classList.remove('focused')
    })
})


//nav-search-toggle

const navSearchToggleBtn = selectElement('.search-btn')
const navSearchCloseBtn = selectElement('.search-close-btn')
const navSearchContainer = selectElement('.search-container')

navSearchToggleBtn.addEventListener('click', () => {
    navSearchContainer.classList.toggle('active')
})

navSearchCloseBtn.addEventListener('click', () => {
    navSearchContainer.classList.toggle('active')
})