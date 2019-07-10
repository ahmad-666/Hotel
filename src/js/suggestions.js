let prevBtns = document.querySelectorAll('.slider-wrapper .btn.btn-right') ;
let nextBtns = document.querySelectorAll('.slider-wrapper .btn.btn-left') ;
let slider = null;
let offset = null ;
let currPos = 0 ;
prevBtns.forEach(btn=>btn.addEventListener('click',prevHadndler)) ;
nextBtns.forEach(btn=>btn.addEventListener('click',nextHadndler)) ;
function nextHadndler(e){
    slider = this.parentElement.querySelector('.slider');
    offset = slider.querySelector('.slide').clientWidth ;
    if(Math.abs(currPos-offset) <= offset*slider.childElementCount){
        currPos-=offset ;
        slider.style.right = `${currPos}px` ;
    } 
}
function prevHadndler(e){
    slider = this.parentElement.querySelector('.slider');
    offset = slider.querySelector('.slide').clientWidth ;
    if(currPos+offset < offset){
        currPos+=offset ;
        slider.style.right = `${currPos}px` ;
    } 
}
// let offset = document.querySelector('.slider-wrapper .slide').clientWidth ;
// let discountSlider = document.querySelector('#discount .slider') ;
// let discountRight = 0 ;
// let discountThreshold = Math.abs(window.innerWidth - discountSlider.clientWidth)+offset ;
// let topSlider = document.querySelector('#top .slider') ;
// let topRight = 0 ;
// let topThreshold = Math.abs(window.innerWidth - topSlider.clientWidth)+offset ;
// let suggestionSlider = document.querySelector('#suggestion .slider') ;
// let suggestionRight = 0 ;
// let suggestionThreshold = Math.abs(window.innerWidth - suggestionSlider.clientWidth)+offset ;
// let prevBtns = document.querySelectorAll('.slider-wrapper .btn-right') ;
// let nextBtns = document.querySelectorAll('.slider-wrapper .btn-left') ;
// nextBtns.forEach(next=>next.addEventListener('click',nextAnimation));
// prevBtns.forEach(prev=>prev.addEventListener('click',prevAnimation));
// function nextAnimation(e){
//     let next = this ;
//     switch(next.parentNode){
//         case discountSlider.parentNode:
//             if(Math.abs(discountRight - offset) < discountThreshold){
//                 discountRight -= offset
//                 discountSlider.style.right = `${discountRight}px` ;
//             }        
//             break ;
//         case topSlider.parentNode:
//             if(Math.abs(topRight - offset) < topThreshold){
//                 topRight -= offset
//                 topSlider.style.right = `${topRight}px` ;
//             }        
//             break ;
//         case suggestionSlider.parentNode:
//             if(Math.abs(suggestionRight - offset) < suggestionThreshold){
//                 suggestionRight -= offset
//                 suggestionSlider.style.right = `${suggestionRight}px` ;
//             }        
//             break ;
//     }
// }
// function prevAnimation(e){
//     let prev = this ;
//     switch(prev.parentNode){
//         case discountSlider.parentNode:
//             if(discountRight + offset <= 0){
//                 discountRight += offset
//                 discountSlider.style.right = `${discountRight}px` ;
//             }        
//             break ;
//         case topSlider.parentNode:
//             if(topRight + offset <= 0){
//                 topRight += offset
//                 topSlider.style.right = `${topRight}px` ;
//             }        
//             break ;
//         case suggestionSlider.parentNode:
//             if(suggestionRight + offset <= 0){
//                 suggestionRight += offset
//                 suggestionSlider.style.right = `${suggestionRight}px` ;
//             }        
//             break ;
//     }
// }
// window.addEventListener('resize',e=>{
//     discountSlider.style.right = 0 ;
//     topSlider.style.right = 0 ;
//     suggestionSlider.style.right = 0 ;
//     discountRight = 0 ;
//     topRight = 0 ;
//     suggestionRight = 0 ;
//     offset = document.querySelector('.slider-wrapper .slide').clientWidth ;
//     discountThreshold = Math.abs(window.innerWidth - discountSlider.clientWidth)+offset ;
//     topThreshold = Math.abs(window.innerWidth - topSlider.clientWidth)+offset ;
//     suggestionThreshold = Math.abs(window.innerWidth - suggestionSlider.clientWidth)+offset ;
// })
