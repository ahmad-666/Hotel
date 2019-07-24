//import anime from 'animejs' ;
let slider = document.querySelector('#sponsers .my-slider') ;
let slide = slider.querySelector('.my-slide') ;
let totalSliderWidth = (parseInt(window.getComputedStyle(slide,null).getPropertyValue('margin-right')) + 
            parseInt(window.getComputedStyle(slide,null).getPropertyValue('margin-left')) +
            slide.clientWidth) * slider.childElementCount ;
if(totalSliderWidth > window.innerWidth) {
    let time = (slider.childElementCount)*2*1000 ;
    let offset = Math.abs(totalSliderWidth - window.innerWidth); 
    anime({
        targets: slider ,
        duration: time ,
        easing: 'linear' ,
        delay: 0 ,
        direction: 'alternate' ,
        loop: true ,
        right: -offset 
    })
}
