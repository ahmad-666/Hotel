import moment from 'moment-jalaali' ;
moment.loadPersian({dialect: 'persian-modern'}) ;
import {calenderIn,calenderOut} from '../../index/scripts/calender' 
//calculate number of days between two dates 
//-------------------------------------------
//-------------------------------------------
let daysNum = false ;
setDaysNum() ;
function setDaysNum(){
    let calenderInDate = moment(`${calenderIn.year}/${calenderIn.monthIndex+1}/${calenderIn.today}`,'jYYYY/jMM/jDD') ;
    let calenderOutDate = moment(`${calenderOut.year}/${calenderOut.monthIndex+1}/${calenderOut.today}`,'jYYYY/jMM/jDD') ;
    if(calenderInDate.format('jYYYY/jMM/jDD') == calenderOutDate.format('jYYYY/jMM/jDD')) daysNum = 1 ; //if select same dates return 1  
    else if(calenderInDate.isAfter(calenderOutDate)) daysNum = '0' ; //if calenderIn is bigger   
    else if(calenderIn.compareTo.hiddenForm.value == '') daysNum = '0' ; //if calenderIn is smaller but we dont have value for calenderOut   
    else daysNum = calenderOutDate.diff(calenderInDate,'days') ; //normal    
}
let calendersOutputs = [calenderIn.hiddenForm,calenderOut.hiddenForm] ;
calendersOutputs.forEach(output => {
    output.addEventListener('change',updateDaysNum) ;
})
function updateDaysNum(e){
    setDaysNum() ;
}
export {
	daysNum
}