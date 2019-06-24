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
let range = document.querySelector('#range');
noUiSlider.create(range, {
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
            suffix: ' تومان' 
        }) ,
        wNumb({
            decimals: 0, 
            thousand: '.', 
            suffix: ' تومان' 
        })      
    ] ,
    format: wNumb({ 
        decimals: 0, 
        thousand: '.', 
        suffix: ' تومان'
    })
});
document.querySelector('.noUi-target').style.border = 'none' ;
let handlers = document.querySelectorAll('.noUi-handle') ;
handlers.forEach((handler,i)=>{
    handler.classList.add('ranger-handle') ;
    handler.pseudoStyle('before','background-color','transparent') ; 
    handler.pseudoStyle('after','background-color','transparent') ; 
    if(i==0)  {
        handler.style.right = '-1em' ;
        handler.style.left = '' ;
    }
    else if(i==1) {
        handler.style.right = '' ;
        handler.style.left = '1em' ;
    }
});
