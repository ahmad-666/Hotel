import anime from 'animejs' ;
let slider = document.querySelector('#sponsers .my-slider') ;
let offset = Math.abs(window.innerWidth - slider.clientWidth) + slider.querySelector('.my-slide').clientWidth ;
let time = (slider.childElementCount)*2*1000 ;
anime({
    targets: slider ,
    duration: time ,
    easing: 'linear' ,
    delay: 0 ,
    direction: 'alternate' ,
    loop: true ,
    right: -offset 
})
