function Tooltip(elm,text){
    this.elm = elm ;
    this.text = text ;
}
Tooltip.prototype.create = function(){
    let span = document.createElement('span') ;
    span.textContent = this.text ;
    span.classList.add('tooltip-content','hide') ;
    this.elm.appendChild(span) ;
}
let tooltips = document.querySelectorAll('.tooltip') ;
initTooltips(tooltips) ;
function initTooltips(tooltips){
    tooltips.forEach(tooltip=>{
        let t = new Tooltip(tooltip,tooltip.getAttribute('data-text')) ;
        t.create() ;
        tooltip.addEventListener('mouseenter',e=>{
            tooltip.querySelector('span').classList.add('show') ;
            tooltip.querySelector('span').classList.remove('hide') ;
        })
        tooltip.addEventListener('mouseleave',e=>{
            tooltip.querySelector('span').classList.add('hide') ;
            tooltip.querySelector('span').classList.remove('show') ;
        })
    })
}
