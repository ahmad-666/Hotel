//set and init calenders---------------------
//set and init calenders---------------------
//set and init calenders---------------------
import moment from 'moment-jalaali' ;
moment.loadPersian({dialect: 'persian-modern'}) ;
import {calenderIn,calenderOut} from '../../index/scripts/calender' 
import { totalmem } from 'os';
let today = parseInt(calenderIn.elm.querySelector('.days .curr').textContent) ; //today index from [1,31]
let tomorrow = today + 1 ;
calenderIn.elm.querySelectorAll('.days .month-day').forEach(day => {
    if(parseInt(day.textContent) == today) day.click() ; //preselect today on calenderIn
})
if(today != moment.jDaysInMonth(calenderOut.year,calenderOut.monthIndex)){ //if today is not last day of month then tomorrow is inside current month too  
    calenderOut.elm.querySelectorAll('.days .month-day').forEach(day => {
        if(parseInt(day.textContent) == tomorrow) day.click() ; //preselect tomorrow on calenderOut
    })
}
else { //today is last day of current month so next day is 1st day of next month
    calenderOut.nextBtn.click() ;
    calenderOut.elm.querySelectorAll('.days .month-day').forEach(day => {
        if(parseInt(day.textContent) == 1) day.click() ; //preselect tomorrow on calenderOut
    })
}
let daysInterval = calenderOut.today - calenderIn.today ;
//calculate how many days user want---------------------
let calenderInputs = [calenderIn.hiddenForm,calenderOut.hiddenForm] ;
calenderInputs.forEach(hidInput => {
    hidInput.addEventListener('change',changeDaysInterval) ;
})
function changeDaysInterval(e){
    console.log(calenderOut.today , calenderIn.today) ;
    daysInterval = (calenderOut.today - calenderIn.today > 0) ? (calenderOut.today - calenderIn.today) : (0) ;
    console.log(daysInterval)
}
