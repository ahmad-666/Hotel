let toolTipes = document.querySelectorAll('.tooltipped') ;
let wifiHTML = '<span class="white-text"> وای فای </span>';
let tvHTML = '<span class="white-text"> تلویزیون </span>';
let dumbbellHTML = '<span class="white-text"> باشگاه  </span>';
let poolHTML = '<span class="white-text"> استخر </span>';
let showerHTML = '<span class="white-text"> حمام  </span>';
let utensilsHTML = '<span class="white-text"> رستوران  </span>';
toolTipes.forEach(elm=>{
    let classListStr = [...elm.classList].join() ;
    if(classListStr.includes('wifi')) {
        M.Tooltip.init(elm,{
            html : wifiHTML ,
            position : 'top'
        })
    } 
    else if(classListStr.includes('tv')) {
        M.Tooltip.init(elm,{
            html : tvHTML ,
            position : 'top'
        })
    } 
    else if(classListStr.includes('dumbbell')) {
        M.Tooltip.init(elm,{
            html : dumbbellHTML ,
            position : 'top'
        })
    } 
    else if(classListStr.includes('pool')) {
        M.Tooltip.init(elm,{
            html : poolHTML ,
            position : 'top'
        })
    } 
    else if(classListStr.includes('shower')) {
        M.Tooltip.init(elm,{
            html : showerHTML ,
            position : 'top'
        })
    } 
    else if(classListStr.includes('utensils')) {
        M.Tooltip.init(elm,{
            html : utensilsHTML ,
            position : 'top'
        })
    } 
});
