import anime from 'animejs';
let sliders = document.querySelectorAll('.slider-wrapper .slider') ;
let overlays = document.querySelectorAll('.slider .overlay') ;
let discountSlider = document.querySelector('#discount .slider') ;
let topSlider = document.querySelector('#top .slider') ;
let suggestionSlider = document.querySelector('#suggestion .slider') ;
//Animation--------------------------------------
//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------
let timer = 3000 ;
let discountAnim = null ;
let topAnim = null ;
let suggestionAnim = null ;
let discountOffset = (discountSlider.clientWidth - window.innerWidth > 0) ? -(discountSlider.clientWidth - window.innerWidth) : 0  ;
let topOffset = (topSlider.clientWidth - window.innerWidth > 0) ? -(topSlider.clientWidth - window.innerWidth) : 0  ;
let suggestionOffset = (suggestionSlider.clientWidth - window.innerWidth > 0) ? -(suggestionSlider.clientWidth - window.innerWidth) : 0  ;
discountAnimation(discountOffset) ;
topAnimation(topOffset) ;
suggestionAnimation(suggestionOffset) ;
function discountAnimation(discountOffset){
    discountAnim = anime({
        targets: discountSlider ,
        loop: true ,
        direction: 'alternate' ,
        easing: 'linear' ,
        duration:discountSlider.childElementCount*timer,
        right: discountOffset       
    });
}
function topAnimation(topOffset){
    topAnim = anime({
        targets: topSlider ,
        loop: true ,
        direction: 'alternate' ,
        easing: 'linear' ,
        duration: topSlider.childElementCount*timer,
        right: topOffset       
    });
}
function suggestionAnimation(suggestionOffset){
    suggestionAnim = anime({
        targets: suggestionSlider ,
        loop: true ,
        direction: 'alternate' ,
        easing: 'linear' ,
        duration: suggestionSlider.childElementCount*timer,
        right: suggestionOffset       
    });
}
//Window resize responsive----------------------
//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------
window.addEventListener('resize',e=>{
    discountOffset = (discountSlider.clientWidth - window.innerWidth > 0) ? -(discountSlider.clientWidth - window.innerWidth) : 0  ;
    topOffset = (topSlider.clientWidth - window.innerWidth > 0) ? -(topSlider.clientWidth - window.innerWidth) : 0  ;
    suggestionOffset = (suggestionSlider.clientWidth - window.innerWidth > 0) ? -(suggestionSlider.clientWidth - window.innerWidth) : 0  ;
    discountAnim.reset() ;
    topAnim.reset() ;
    suggestionAnim.reset() ;
    discountAnimation(discountOffset) ;
    topAnimation(topOffset) ;
    suggestionAnimation(suggestionOffset) ;
});
//Stop on hover--------------------------------------
//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------