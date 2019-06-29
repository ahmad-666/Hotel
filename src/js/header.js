let navbar = document.querySelector('#nav') ;
window.addEventListener('scroll',e=>{
    if(parseInt(window.scrollY) > navbar.getBoundingClientRect().height) {
        navbar.style.position = 'fixed' ;
        navbar.style.backgroundColor = 'rgba(10,10,10,.8)' ;
    }
    else {
        navbar.style.position = 'absolute' ;
        navbar.style.backgroundColor = 'transparent' ;
    }
})