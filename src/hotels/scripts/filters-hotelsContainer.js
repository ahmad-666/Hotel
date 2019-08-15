import wNumb from 'wnumb' ;
import noUiSlider from 'nouislider' ;
let UID = {
    _current: 0,
    getNew: function(){
        this._current++;
        return this._current;
    }
};
HTMLElement.prototype.pseudoStyle = function(element,prop,value){
    let _this = this;
    let _sheetId = "pseudoStyles";
    let _head = document.head || document.getElementsByTagName('head')[0];
    let _sheet = document.getElementById(_sheetId) || document.createElement('style');
    _sheet.id = _sheetId;
    let className = "pseudoStyle" + UID.getNew();	
    _this.className +=  " "+className; 	
    _sheet.innerHTML += " ."+className+":"+element+"{"+prop+":"+value+"}";
    _head.appendChild(_sheet);
    return this;
};
let ranger = document.querySelector('#ranger');
noUiSlider.create(ranger,{
    orientation: 'horizontal' ,
    direction: 'rtl',
    animate: true,
    animationDuration: 300,
    behaviour: 'tap', 
    range: {
        'min': [0],
        'max': [2000000]
    },
    start: [0,2000000],
    connect: [false,true,false],
    step: 100000,
    tooltips: [
        wNumb({
            decimals: 0, 
            thousand: '.', 
            // suffix: ' تومان' 
        }) ,
        wNumb({
            decimals: 0, 
            thousand: '.', 
            // suffix: ' تومان' 
        })      
    ] ,
    format: wNumb({ 
        decimals: 0, 
        thousand: '' 
    })
});
ranger.style.border = "none" ;
let handlers = document.querySelectorAll('#ranger .noUi-handle') ;
handlers.forEach((handler,i) => {
    handler.classList.add('circle') ;
    switch(i){
        case 0 :
            handler.classList.add('right') ;
            break ;
        case 1 :
            handler.classList.add('left') ;
            break ;
    }
    
})
let tooltips = document.querySelectorAll('#ranger .noUi-tooltip') ;
tooltips.forEach((tooltip,i)=>{
    tooltip.classList.add('newStyle') ;
    switch(i) {
        case 0 :
            tooltip.classList.add('right') ;
            break ;
        case 1 :
            tooltip.classList.add('left') ;
            break ;
    }
}) 
let minPrice = ranger.querySelector('#min-price') ;
let maxPrice = ranger.querySelector('#max-price') ;
handlers.forEach(handler => {
    handler.addEventListener('mousedown',e=>{
        let tooltip = handler.querySelector('.noUi-tooltip') ;
        tooltip.style.display = "block" ;
    }) ;
    handler.addEventListener('mouseup',e=>{
        let tooltip = handler.querySelector('.noUi-tooltip') ;
        tooltip.style.display = "none" ;
    }) ;
})
ranger.noUiSlider.on('end',()=>{
    minPrice.value = ranger.noUiSlider.get()[0];
    maxPrice.value = ranger.noUiSlider.get()[1];
});
let filters = document.querySelector('#filters') ;
filters.addEventListener('touchmove',e=>{
    e.stopPropagation() ;
})
