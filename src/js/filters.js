import wNumb from 'wnumb' ;
import noUiSlider from 'nouislider' ;
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
let elm = document.querySelectorAll('.noUi-handle') ;
console.log(elm) ;
elm.forEach(e=>{
    e.style.backgroundColor = 'red' ;
    e.classList.add('newC') ;
})