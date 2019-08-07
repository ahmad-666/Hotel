import {daysNum} from '../../hotel/scripts/daysNum' ;
import {calenderIn,calenderOut} from '../../index/scripts/calender' ;
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
//Init room calenders....................
//...............................
// let roomCalenders = document.querySelectorAll('#rooms .room .room-calender') ;
// let calendersHidden = [calenderIn.hiddenForm,calenderOut.hiddenForm] ;
// updateRoomCalenders() ;
// function updateRoomCalenders(){
//     roomCalenders.forEach(roomCalender => {
//         roomCalender.setAttribute('how-many',daysNum) ;
//     })
//     let fullDateClone = roomCalender.querySelector('date.full').clone() ;
//     let disCountDateClone = roomCalender.querySelector('date.discount').clone() ;
//     let normDateClone = roomCalender.querySelector('date:not(.full):not(.discount)').clone() ;
//     let howMany = roomCalender.getAttribute('how-many') ;
//     for(let i=0 ; i<howMany ; i++){

//     }
// }
// calendersHidden.forEach(calenderHidden => {
//     calenderHidden.addEventListener('change',updateRoomCalenders) ;
// })


