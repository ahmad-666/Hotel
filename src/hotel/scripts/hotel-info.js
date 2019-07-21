//-------------Tooltip----------------------------
//------------------------------------------------

//-------------Slider----------------------------
//-----------------------------------------------
let dots = document.querySelectorAll('#slider .dot') ;
let imgs = document.querySelectorAll('#slider .img') ;
initSlider() ;
function initSlider(){
    imgs[0].style.transform = 'translateX(0%) scaleX(1)' ;
    imgs[0].style.opacity = '1' ;
    imgs.forEach(img=>img.style.transition= 'all .6s ease-in-out' )
}
dots.forEach(dot=>{
    dot.addEventListener('click',e=>{
        let currSlideIndex = null ;
        dots.forEach(d=>{
            if(d.classList.contains('active')) currSlideIndex = d.getAttribute('data-target') ;
            d.classList.remove('active');
        }) ;
        e.target.classList.add('active') ;
        let nextSlideIndex = e.target.getAttribute('data-target') ;
        changeSlide(currSlideIndex,nextSlideIndex) ;
    })
})
function changeSlide(curr,next){
    imgs[curr].style.transform = 'translateX(100%) scaleX(4)' ;
    imgs[curr].style.opacity = '0' ;
    imgs[next].style.transform = 'translateX(0%) scaleX(1)' ;
    imgs[next].style.opacity = '1' ;
    
}