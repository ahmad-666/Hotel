let toolTipes = document.querySelectorAll('.tooltipped') ;
let tooltipConfig = {
    position: 'top'
}
toolTipes.forEach(tooltip=>{
    let html = `<span class="white-text"> ${tooltip.getAttribute('data-text')}</span>` ;
    M.Tooltip.init(tooltip,{
        ...tooltipConfig ,
        html
    });
})
