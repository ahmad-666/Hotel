import anime from 'animejs' ;
let hamburger = document.querySelector('#nav #hamburger') ;
let gridWrapper = document.querySelector('#grid-menu') ;
let colors = gridWrapper.querySelectorAll('.color') ;
let imgs = gridWrapper.querySelectorAll('.img') ;
let texts = gridWrapper.querySelectorAll('p');
let closeIcon = gridWrapper.querySelector('.fa-times') ;
let animationTime = 200 ;
let mobileHamburger = document.querySelector('#mobile-nav a:last-child') ;
let all = document.querySelectorAll('body > *:not(#grid-menu)') ;
let scroll = {
    x:null ,
    y:null 
};
let prevDisplays = [] ; //previous display propery of 'all' elements
all.forEach(elm=>{
    prevDisplays.push(window.getComputedStyle(elm,null).getPropertyValue('display'));
}) 
hamburger.addEventListener('click',openGrid) ;
function openGrid(e){
    scroll.x = window.scrollX ;
    scroll.y = window.scrollY ;
    gridWrapper.classList.toggle('show') ;
    window.scrollTo(0,0) ;
    openingAnimation() ;
}
function openingAnimation(){
    all.forEach(elm=>elm.style.display='none') ;
    let tl = anime.timeline({
        loop: 1 ,
        direction: 'normal' ,
        easing: 'linear' 
    }) ;
    tl.add({
        targets: colors ,
        duration: animationTime ,
        delay: anime.stagger(animationTime/2) ,
        width: '100%' ,
        // complete: function(){
        //     all.forEach(elm=>elm.style.display='none') ;
        // }
    },0) ;
    tl.add({
        targets: closeIcon ,
        duration: animationTime ,
        delay: 0 ,
        opacity: 1
    },animationTime) ;
    tl.add({
        targets: imgs ,
        duration: animationTime ,
        delay: anime.stagger(animationTime/2) ,
        width: '100%' ,
    },(animationTime*colors.length)/6) ;
    tl.add({
        targets: texts ,
        duration: animationTime ,
        delay: anime.stagger(animationTime/2) ,
        opacity: 1
    },(animationTime*colors.length)/3) ;
}
closeIcon.addEventListener('click',closeGrid) ;
function closeGrid(e){
    closingAnimation() ;
}
function closingAnimation(){
    all.forEach((elm,i)=>elm.style.display=prevDisplays[i]) ;
    window.scrollTo(scroll.x,scroll.y) ;
    let tl = anime.timeline({
        loop: 1 ,
        direction: 'normal' ,
        easing: 'linear' 
    }) ;
    tl.add({
        targets: texts ,
        duration: animationTime ,
        delay: anime.stagger(animationTime/2) ,
        opacity: 0
    },0) ;
    tl.add({
        targets: imgs ,
        duration: animationTime ,
        delay: anime.stagger(animationTime/2) ,
        width: '0%' 
    },animationTime*2) ;
    tl.add({
        targets: closeIcon ,
        duration: animationTime ,
        delay: 0 ,
        opacity: 0
    },animationTime*2) ;
    tl.add({
        targets: colors ,
        duration: animationTime ,
        delay: anime.stagger(animationTime/2) ,
        width: '0%' ,    
        complete: function(){
            gridWrapper.classList.toggle('show') ;
        } 
    },animationTime*3) ;
    
    
    
}
mobileHamburger.addEventListener('click',openGrid) ;