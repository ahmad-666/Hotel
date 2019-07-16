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

//Open calender grid
//--------------------------
//--------------------------
let showCalenderBtns = document.querySelectorAll('#rooms .room .calender-show button') ;
showCalenderBtns.forEach(showCalenderBtn=>{
    showCalenderBtn.addEventListener('click',function(e){
        let calender = this.parentNode.parentNode.querySelector('.room-calender') ;
        calender.classList.toggle('show-calender-grid') ;
    })
})