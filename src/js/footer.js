let path = document.querySelector('#footer path') ;
let w = window.innerWidth ;
let h = document.querySelector('#footer').clientHeight ;
let params = {
    curveControlX: w/2,
    curveControlY: 1.2*h/3,
    curvefinalX: w,
    curvefinalY: 0,
    line1X: 0,
    line1Y: h,
    line2X: w,
    line2Y: 0,
}
let shape = `M0,0 q${params.curveControlX},${params.curveControlY} 
    ${params.curvefinalX},${params.curvefinalY} 
    l${params.line1X},${params.line1Y} 
    l${-params.line2X},${params.line2Y} z` ;
path.setAttribute('d',shape) ;
window.addEventListener('resize',e=>{
    w = window.innerWidth ;
    h = document.querySelector('#footer').clientHeight ;
    params.curveControlX = w/2 ;
    params.curveControlY = 1.2*h/3 ;
    params.curvefinalX = w ;
    params.curvefinalY = 0 ;
    params.line1X = 0 ;
    params.line1Y = h ;
    params.line2X = w ;
    params.line2Y = 0 ;
    shape = `M0,0 q${params.curveControlX},${params.curveControlY} 
        ${params.curvefinalX},${params.curvefinalY} 
        l${params.line1X},${params.line1Y} 
        l${-params.line2X},${params.line2Y} z` ;
    path.setAttribute('d',shape) ;
});
