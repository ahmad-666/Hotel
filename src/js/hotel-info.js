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
import imgsObj from '../assets/imgs/slider/*.*' ;
//format of imgsObj : 
//{<imgname>:{<imgForamt>:<imgPath>},...}
let imgsPath = [] ;
for(let imgName in imgsObj){
    let imgNameTemp = imgsObj[imgName] ;
    for(let imgFormat in imgNameTemp){
        imgsPath.push(imgNameTemp[imgFormat]) ;
    }
}
let getStyle = (elm,prop)=> window.getComputedStyle(elm,null).getPropertyValue(prop) ;
let slider = document.querySelector('#slider') ;
let bgImage = document.querySelector('#slider img') ;
let slides = document.querySelectorAll('#slider-items .slide') ;
let slidesNum = slides.length ;
let slidesContainer = document.querySelector('#slider-items') ;
let rightArrow = document.querySelector('#slider .fa-arrow-right');
let leftArrow = document.querySelector('#slider .fa-arrow-left');
let currIndex = 0 ;
let rightOffset = 0 ;
let offsetValue = 12 ; //12em is size of each image
changeImage(currIndex) ;
function changeImage(targetIndex){
    bgImage.setAttribute('src',imgsPath[targetIndex]) ;
    bgImage.setAttribute('alt',imgsPath[targetIndex]) ;
}
leftArrow.addEventListener('click',e=>{
    if(Math.abs(rightOffset - offsetValue) < (slidesNum)*(offsetValue) ){
        //currIndex++ ;      
        rightOffset -= offsetValue ;
        slidesContainer.style.right = `${rightOffset}em` ;
        // slides.forEach((slide,i)=>{
        //     if(slide.classList.contains('active')) slide.classList.remove('active') ;
        //     if(i==currIndex) slide.classList.add('active') ;
        //     changeImage(currIndex) ;
        // })
    }
    
})
rightArrow.addEventListener('click',e=>{
    if(rightOffset + offsetValue <= 0 ){     
        //currIndex-- ;
        rightOffset += offsetValue ;
        slidesContainer.style.right = `${rightOffset}em` ;
        // slides.forEach((slide,i)=>{
        //     if(slide.classList.contains('active')) slide.classList.remove('active') ;
        //     if(i==currIndex) slide.classList.add('active') ;
        //     changeImage(currIndex) ;
        // })
    }   
}) ;
slides.forEach((slide,i)=>{
    slide.addEventListener('click',e=>{
        slides.forEach(s=>{
            if(s.classList.contains('active')) s.classList.remove('active') ;
        })
        e.target.classList.add('active') ;
        currIndex = i ;
        changeImage(currIndex) ;
    })
})