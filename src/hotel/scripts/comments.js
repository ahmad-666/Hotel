import wNumb from 'wnumb' ;
import noUiSlider from 'nouislider' ;
let rangers = document.querySelectorAll('#comments #user-comment .ranger');
rangers.forEach(ranger => {
    noUiSlider.create(ranger,{
        orientation: 'horizontal' ,
        direction: 'rtl',
        animate: true,
        animationDuration: 300,
        behaviour: 'tap', 
        range: {
            'min': [0],
            'max': [5]
        },
        start: [5],
        connect: [true,false],
        step: 1,
        tooltips: [
            wNumb({
                decimals: 0, 
                suffix: '    امتیاز' 
            })            
        ] ,
        format: wNumb({ 
            decimals: 0, 
            thousand: '' 
        })
    });
    ranger.style.border = "none" ;
})
let handlers = document.querySelectorAll('#comments #user-comment .ranger .noUi-handle') ;
handlers.forEach(handler => {
    handler.classList.add('circle') ;   
});
let tooltips = document.querySelectorAll('#comments #user-comment .ranger .noUi-tooltip') ;
tooltips.forEach(tooltip=>{
    tooltip.classList.add('newStyle') ;
}) 
rangers.forEach(ranger => {
    ranger.noUiSlider.on('end',()=>{
        ranger.parentElement.querySelector('input[type="hidden"]').value = ranger.noUiSlider.get()[0];
    });   
})
