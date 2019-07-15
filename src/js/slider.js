import { throws } from "assert";

let dots = document.querySelectorAll('#slider #dots .dot') ;
let slides = document.querySelectorAll('#slider #slides .slide') ;
dots.forEach(dot=>{
    dot.addEventListener('click',dotHandler) ;
}) ;
function dotHandler(e){
    let oldSlide = null ;
    let newSlide = null ;
    dots.forEach(dot=>{
        if(dot.classList.contains('active')) {
            oldSlide = dot.getAttribute('data-slide')
            dot.classList.remove('active') ;
        }      
    })
    this.classList.add('active') ;   
    newSlide = this.getAttribute('data-slide') ;
    changeSlide(oldSlide,newSlide) ;
}
function changeSlide(oldSlide,newSlide){
    slides[oldSlide].classList.remove('show') ;
    slides[newSlide].classList.add('show') ;
}