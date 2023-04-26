let $ = document

const menu = $.querySelector('.menu')
const menuBtn = $.querySelector('.header-icon')
const menuBtnElem = $.querySelector('.header-icon i')

menuBtnElem.addEventListener('click', function () {
    if (menuBtnElem.classList.contains("fa-bars")) {
        menu.style.left = '0px'
        menuBtnElem.className = 'fa fa-times'
        $.body.style.background = ''
    } else {
        menuBtnElem.className = 'fa fa-bars'
        menu.style.left = '-256px'
    }
})