import whiteLogo from '../../assets/imgs/white-logo.png' ;
import blackLogo from '../../assets/imgs/black-logo.png' ;
let navbar = document.querySelector('#nav') ;
let navbarLinks = document.querySelectorAll('#nav > a') ;
let signIn = document.querySelector('#nav a:nth-child(2)');
let hamburgerLines = document.querySelectorAll('#hamburger span') ;
let mobileBars = document.querySelector('#nav .fa-bars') ;
let mobileNav = document.querySelector('#mobile-nav') ;
mobileNav.addEventListener('touchmove',function(e){
    e.preventDefault() ;
})

let host = document.querySelector('#host') ;
let logoImg = document.querySelector('#home img') ;
window.addEventListener('scroll',e=>{
    if(parseInt(window.scrollY) > navbar.getBoundingClientRect().height) {
        navbar.style.backgroundColor = 'rgba(10,10,10,.85)' ;
        navbarLinks.forEach(link=>link.style.color = 'white') ;
        hamburgerLines.forEach(line => line.style.backgroundColor ="white") ;
        mobileBars.style.color = 'white' ;
        //host.style.border = '2px solid white' ;
        logoImg.setAttribute('src',whiteLogo) ;
    }
    else {
        navbar.style.backgroundColor = 'rgb(245,245,245)' ;
        navbarLinks.forEach(link=>link.style.color = 'rgb(50,50,50)') ;
        hamburgerLines.forEach(line => line.style.backgroundColor ="rgb(50,50,50)") ;
        mobileBars.style.color = 'rgb(57,57,57)' ;
        //host.style.border = '2px solid rgb(50,50,50)' ;
        logoImg.setAttribute('src',blackLogo) ;
    }
})

mobileBars.addEventListener('click',barsHandler) ;
function barsHandler(e){
    e.stopPropagation() ;
    mobileNav.classList.toggle('show-mobile-nav') ;
    if(mobileNav.classList.contains('show-mobile-nav')) {
        document.addEventListener('click',docHadnler) ;
    }
}
function docHadnler(e){
    e.stopPropagation();
    let clickedElm = e.target ;
    if(!mobileNav.contains(clickedElm)) {
        mobileNav.classList.remove('show-mobile-nav') ;
        document.removeEventListener('click',docHadnler) ;
    }   
}
