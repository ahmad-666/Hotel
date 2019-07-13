let navbar = document.querySelector('#nav') ;
let navbarLinks = document.querySelectorAll('#nav > a') ;
let signIn = document.querySelector('#nav a:nth-child(2)');
let hamburgerLines = document.querySelectorAll('#hamburger span') ;
let mobileBars = document.querySelector('#nav .fa-bars') ;
let mobileNav = document.querySelector('#mobile-nav') ;
window.addEventListener('scroll',e=>{
    if(parseInt(window.scrollY) > navbar.getBoundingClientRect().height) {
        navbar.style.position = 'fixed' ;
        navbar.style.backgroundColor = 'rgba(10,10,10,.85)' ;
        navbarLinks.forEach(link=>link.style.color = 'white') ;
        hamburgerLines.forEach(line => line.style.backgroundColor ="white") ;
        mobileBars.style.color = 'white' ;
    }
    else {
        navbar.style.position = 'relative' ;
        navbar.style.backgroundColor = 'rgb(245,245,245)' ;
        navbarLinks.forEach(link=>link.style.color = 'rgb(50,50,50)') ;
        hamburgerLines.forEach(line => line.style.backgroundColor ="rgb(50,50,50)") ;
        mobileBars.style.color = 'rgb(57,57,57)' ;
    }
})

mobileBars.addEventListener('click',function(e){
    mobileNav.classList.toggle('show-mobile-nav') ;
})