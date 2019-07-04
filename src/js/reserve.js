//Increase/Decrease room-num
//--------------------------
//--------------------------
let increaseBtns = document.querySelectorAll('.room button#increase') ;
let decreaseBtns = document.querySelectorAll('.room button#decrease') ;
increaseBtns.forEach(increaseBtn=>{
    increaseBtn.addEventListener('click',function(e){
        let guestNum = this.parentNode.querySelector('input[type="number"]');
        guestNum.value++ ;
    })
})
decreaseBtns.forEach(decreaseBtn=>{
    decreaseBtn.addEventListener('click',function(e){
        let guestNum = this.parentNode.querySelector('input[type="number"]');
        if(guestNum.value-1>=0) guestNum.value-- ;
    })
})

//features tooltip
//--------------------------
//--------------------------
let tooltips = document.querySelectorAll('#rooms .features .tooltipped') ;
let tooltipConfig = {
    position: 'top' 
}
let wifiTooltip = 'وای فای' ;
tooltips.forEach(tooltip=>{
    if([...tooltip.classList].join().includes('wifi')){
        M.Tooltip.init(tooltip,{
            ...tooltipConfig ,
            html: `<span class="white-text">${wifiTooltip}</span>`
        })
    }
})
//Open calender grid
//--------------------------
//--------------------------
let showCalenderBtns = document.querySelectorAll('#rooms .room .show-calender button') ;
showCalenderBtns.forEach(showCalenderBtn=>{
    showCalenderBtn.addEventListener('click',function(e){
        let calender = this.parentNode.parentNode.querySelector('.calender') ;
        calender.classList.toggle('show-calender-grid') ;
    })
})