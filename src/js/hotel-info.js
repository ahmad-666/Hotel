//-------------Tooltip----------------------------
//------------------------------------------------
let tooltips = document.querySelectorAll('#features .tooltipped');
let wifiTooltipHTML = "<span class='white-text'> وای فای </span>" ;
let tvTooltipHTML = "<span class='white-text'> تلویزیون </span>" ;
let dumbbellTooltipHTML = "<span class='white-text'> باشگاه </span>" ;
let poolTooltipHTML = "<span class='white-text'> استخر </span>" ;
let showerTooltipHTML = "<span class='white-text'> حمام </span>" ;
let resturantTooltipHTML = "<span class='white-text'> رستوران </span>" ;
let initConfig = {
    position: 'top' 
}
tooltips.forEach(elm=>{
    if([...elm.classList].join().includes('wifi')) {
        M.Tooltip.init(elm,{
            ...initConfig,
            html: wifiTooltipHTML
        })
    }
    else if([...elm.classList].join().includes('tv')) {
        M.Tooltip.init(elm,{
            ...initConfig,
            html: tvTooltipHTML
        })
    }
    else if([...elm.classList].join().includes('dumbbell')) {
        M.Tooltip.init(elm,{
            ...initConfig,
            html: dumbbellTooltipHTML
        })
    }
    else if([...elm.classList].join().includes('pool')) {
        M.Tooltip.init(elm,{
            ...initConfig,
            html: poolTooltipHTML
        })
    }
    else if([...elm.classList].join().includes('shower')) {
        M.Tooltip.init(elm,{
            ...initConfig,
            html: showerTooltipHTML
        })
    }
    else if([...elm.classList].join().includes('utensils')) {
        M.Tooltip.init(elm,{
            ...initConfig,
            html: resturantTooltipHTML
        })
    }
})
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