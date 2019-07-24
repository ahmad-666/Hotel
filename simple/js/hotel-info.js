//-------------Tooltip----------------------------
//------------------------------------------------

//-------------Slider----------------------------
//-----------------------------------------------
let dots = document.querySelectorAll('#slider .dot') ;
let myimgs = document.querySelectorAll('#slider .img') ;
initSlider() ;
function initSlider(){
    myimgs[0].style.transform = 'translateX(0%) scaleX(1)' ;
    myimgs[0].style.opacity = '1' ;
    myimgs.forEach(img=>img.style.transition= 'all .6s ease-in-out' )
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
    myimgs[curr].style.transform = 'translateX(100%) scaleX(4)' ;
    myimgs[curr].style.opacity = '0' ;
    myimgs[next].style.transform = 'translateX(0%) scaleX(1)' ;
    myimgs[next].style.opacity = '1' ;
    
}