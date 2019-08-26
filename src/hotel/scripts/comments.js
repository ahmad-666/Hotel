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
// let params = document.querySelector('#comments .params') ;
// handlers.forEach(handler => {
//     handler.addEventListener('mousedown',e=>{
//         let tooltip = handler.querySelector('.noUi-tooltip') ;
//         tooltip.style.display = 'block' ;
//     })
//     params.addEventListener('mouseup',e=>{
//         let tooltip = handler.querySelector('.noUi-tooltip') ;
//         tooltip.style.display = 'none' ;
//     })
// })
// handlers.forEach(handler => {
//     handler.addEventListener('mousedown',e=>{
//         let tooltip = handler.querySelector('.noUi-tooltip') ;
//         console.log(tooltip)
//         //tooltip.style.display = "block" ;
//         tooltip.classList.remove('hide') ;
//     }) ;
//     handler.addEventListener('mouseup',e=>{
//         let tooltip = handler.querySelector('.noUi-tooltip') ;
//         console.log(tooltip)
//         tooltip.classList.add('hide') ;
//     }) ;
// })
// handlers[0].addEventListener('mousedown',e=>{
//     let tooltip = handlers[0].querySelector('.noUi-tooltip') ;
    
//     tooltip.style.display = "block" ;
//     //sconsole.log(tooltip)
//     //tooltip.classList.remove('hide') ;
// }) ;
// handlers[0].addEventListener('mouseup',e=>{
//     let tooltip = handlers[0].querySelector('.noUi-tooltip') ;
    
//     tooltip.style.display = "none" ;
//     console.log(tooltip)
//     //tooltip.classList.add('hide') ;
// }) ;
// let hands = document.querySelectorAll('#comments .ranger .noUi-handle')
// hands.forEach(hand => {
//     hand.addEventListener('mousedown',e=>{
//         let tooltip = hand.querySelector('.noUi-tooltip') ;
//         tooltip.style.display = "block" ;
//     }) ;
//     hand.addEventListener('mouseup',e=>{
//         let tooltip = hand.querySelector('.noUi-tooltip') ;
//         tooltip.style.display = "none" ;
//     }) ;
// })
rangers.forEach(ranger => {
    ranger.noUiSlider.on('end',()=>{
        ranger.parentElement.querySelector('input[type="hidden"]').value = ranger.noUiSlider.get()[0];
    });   
})

