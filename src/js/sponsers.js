import anime from 'animejs' ;
let slider = document.querySelector('#sponsers .slider') ;
let offset = Math.abs(window.innerWidth - slider.clientWidth) + slider.querySelector('.slide').clientWidth ;
let time = (slider.childElementCount)*1*1000 ;
anime({
    targets: slider ,
    duration: time ,
    easing: 'linear' ,
    delay: 0 ,
    direction: 'alternate' ,
    loop: true ,
    right: -offset 
})
