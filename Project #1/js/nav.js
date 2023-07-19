/* Navbar toggler */

var toggler = document.querySelector('.toggler')
var navlinks = document.querySelector('.nav-links')
toggler.addEventListener('click', function() {
    navlinks.classList.toggle('circle-toggle')
})

/* Navbar-Scroll Behavior */

var navbarDefault = document.querySelector('.navbar-default')
window.addEventListener('scroll', function() {
    navbarDefault.classList.toggle('navbar-default', window.scrollY <= 50)
    navbarDefault.classList.toggle('navbar-scroll', window.scrollY > 50)

})