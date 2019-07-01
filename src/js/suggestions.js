import anime from 'animejs';
let discountSlider = document.querySelector('#discount .slider') ;
let topSlider = document.querySelector('#top .slider') ;
let suggestionSlider = document.querySelector('#suggestion .slider') ;
//Animation--------------------------------------
//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------
let time = 2500 ;
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
        duration: (discountSlider.childElementCount-1)*time,
        right: discountOffset      
    });
}
function topAnimation(topOffset){
    topAnim = anime({
        targets: topSlider ,
        loop: true ,
        direction: 'alternate' ,
        easing: 'linear' ,
        duration: (topSlider.childElementCount-1)*time,
        right: topOffset       
    });
}
function suggestionAnimation(suggestionOffset){
    suggestionAnim = anime({
        targets: suggestionSlider ,
        loop: true ,
        direction: 'alternate' ,
        easing: 'linear' ,
        duration: (suggestionSlider.childElementCount-1)*time,
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
//Stop on hover----------------------------------
//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------
let overlays = document.querySelectorAll('.slider .overlay') ;
overlays.forEach(overlay=>{
    overlay.addEventListener('mouseenter',e=>{
        switch(e.target.parentNode){
            case discountSlider:
                discountAnim.pause() ;
                break ;
            case topSlider:
                topAnim.pause() ;
                break ;
            case suggestionSlider:
                suggestionAnim.pause() ;
                break ;
        }
    })
    overlay.addEventListener('mouseleave',e=>{
        switch(e.target.parentNode){
            case discountSlider:
                discountAnim.play() ;
                break ;
            case topSlider:
                topAnim.play() ;
                break ;
            case suggestionSlider:
                suggestionAnim.play() ;
                break ;
        }
    })
})
//prev-btn , next-btn----------------------------------
//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------
