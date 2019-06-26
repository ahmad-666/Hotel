//guest numbers toolTip-----------------------------
//--------------------------------------------------
//--------------------------------------------------
let guestNumTooltip = document.querySelectorAll('#reserve .guests-num.tooltipped') ;
let guestNum = 4 ;
let guestToolTipConfig = {
    position: 'top',
    margin: -50
}
guestNumTooltip.forEach(tooltip=>{
    let guestNum = 4 ;
    M.Tooltip.init(tooltip,{
        ...guestToolTipConfig ,
        html: `<span> ${guestNum} نفر </span>`
    })
})
//features toolTip----------------------------------
//--------------------------------------------------
//--------------------------------------------------
let featuresTooltip = document.querySelectorAll('#reserve .features .tooltipped') ;
let wifiTooltipHTML = "<span class='white-text'> وای فای </span>" ;
let tvTooltipHTML = "<span class='white-text'> تلویزیون </span>" ;
let dumbbellTooltipHTML = "<span class='white-text'> باشگاه </span>" ;
let poolTooltipHTML = "<span class='white-text'> استخر </span>" ;
let showerTooltipHTML = "<span class='white-text'> حمام </span>" ;
let resturantTooltipHTML = "<span class='white-text'> رستوران </span>" ;
let featureTooltipConfig = {
    position: 'top' ,
    margin: 0
}
featuresTooltip.forEach(tooltip=>{
    if([...tooltip.classList].join().includes('wifi')) {
        M.Tooltip.init(tooltip,{
            ...featureTooltipConfig,
            html: wifiTooltipHTML
        })
    }
    else if([...tooltip.classList].join().includes('tv')) {
        M.Tooltip.init(tooltip,{
            ...featureTooltipConfig,
            html: tvTooltipHTML
        })
    }
    else if([...tooltip.classList].join().includes('dumbbell')) {
        M.Tooltip.init(tooltip,{
            ...featureTooltipConfig,
            html: dumbbellTooltipHTML
        })
    }
    else if([...tooltip.classList].join().includes('shower')) {
        M.Tooltip.init(tooltip,{
            ...featureTooltipConfig,
            html: showerTooltipHTML 
        })
    }
    else if([...tooltip.classList].join().includes('pool')) {
        M.Tooltip.init(tooltip,{
            ...featureTooltipConfig,
            html: poolTooltipHTML
        })
    }   
})