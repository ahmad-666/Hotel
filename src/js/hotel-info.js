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