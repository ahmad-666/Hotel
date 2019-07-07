let navbar = document.querySelector('#nav') ;
let navbarLinks = document.querySelectorAll('#nav a') ;
let signIn = document.querySelector('#nav a:nth-child(2)');
let hamburgerLines = document.querySelectorAll('#hamburger span') ;
window.addEventListener('scroll',e=>{
    if(parseInt(window.scrollY) > navbar.getBoundingClientRect().height) {
        navbar.style.position = 'fixed' ;
        navbar.style.backgroundColor = 'rgba(10,10,10,.85)' ;
        navbarLinks.forEach(link=>link.style.color = 'white') ;
        signIn.style.border = '1.5px solid white' ;
        hamburgerLines.forEach(line => line.style.backgroundColor ="white") ;
    }
    else {
        navbar.style.position = 'relative' ;
        navbar.style.backgroundColor = 'rgb(245,245,245)' ;
        navbarLinks.forEach(link=>link.style.color = 'rgb(50,50,50)') ;
        signIn.style.border = '1.5px solid rgb(50,50,50)' ;
        hamburgerLines.forEach(line => line.style.backgroundColor ="rgb(50,50,50)") ;
    }
})