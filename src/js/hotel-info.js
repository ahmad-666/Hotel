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
import imgs from '../assets/imgs/slider/*.*' ;
console.log(imgs) ;
let slider = document.querySelector('#slider') ;
let currImg = document.querySelector('#slider img.curr') ;
let nextImg = document.querySelector('#slider img.next') ;
let dotsContainer = document.querySelector('#slider #dot-container') ;
let dots = [] ;
let slidesNum = 7 ;
let currSlide = 0 ;
initSlider() ;
function initSlider(){
    initDots() ;
    initImgs() ;
}
function initDots(){
    for(let i=0 ; i<slidesNum ; i++){
        let dot = document.createElement('SPAN') ;
        dot.classList.add('circle') ;
        if(i==0) dot.classList.add('active') ;
        dots.push(dot) ;
        dotsContainer.appendChild(dot) ;
    }
    dots.forEach(dot=>{
        dot.addEventListener('click',e=>{
            dots.forEach(d=>d.classList.remove('active')) ;
            e.target.classList.add('active') ;        
        })
    })
}
function initImgs(){
    //currImg =
}