//prev,next,month,year,days,currDay,past days work fine but selecting days should get rework and sometimes past days can be selected or future days cant be selected
import moment from 'moment-jalaali' ;
moment.loadPersian({dialect: 'persian-modern'}) ;
//calender html elements------------
//----------------------------------
let prevMonth1 = document.querySelector('#in ~ .calender .fa-angle-right'); //prev btn for calender#1
let prevMonth2 = document.querySelector('#out ~ .calender .fa-angle-right'); //prev btn for calender#2
let nextMonth1 = document.querySelector('#in ~ .calender .fa-angle-left');
let nextMonth2 = document.querySelector('#out ~ .calender .fa-angle-left');
let month1 = document.querySelector('#in ~ .calender span.month') ;
let month2 = document.querySelector('#out ~ .calender span.month') ;
let year1 = document.querySelector('#in ~ .calender span.year') ;
let year2 = document.querySelector('#out ~ .calender span.year') ;
let firstWeekDays1 = document.querySelectorAll('#in ~ .calender .days span:nth-child(2)') ; //first day of month is one of days of first week
let firstWeekDays2 = document.querySelectorAll('#out ~ .calender .days span:nth-child(2)') ;
let firstRow1 = document.querySelectorAll('#in ~ .calender .days span:nth-child(2)') ;
let firstRow2 = document.querySelectorAll('#out ~ .calender .days span:nth-child(2)') ;
let secondRow1 = document.querySelectorAll('#in ~ .calender .days span:nth-child(3)') ;
let secondRow2 = document.querySelectorAll('#out ~ .calender .days span:nth-child(3)') ;
let thirdRow1 = document.querySelectorAll('#in ~ .calender .days span:nth-child(4)') ;
let thirdRow2 = document.querySelectorAll('#out ~ .calender .days span:nth-child(4)') ;
let forthRow1 = document.querySelectorAll('#in ~ .calender .days span:nth-child(5)') ;
let forthRow2 = document.querySelectorAll('#out ~ .calender .days span:nth-child(5)') ;
let fifthRow1 = document.querySelectorAll('#in ~ .calender .days span:nth-child(6)') ;
let fifthRow2 = document.querySelectorAll('#out ~ .calender .days span:nth-child(6)') ;
let sixthRow1 = document.querySelectorAll('#in ~ .calender .days span:nth-child(7)') ;
let sixthRow2 = document.querySelectorAll('#out ~ .calender .days span:nth-child(7)') ;
let monthDays1 = [...firstRow1 , ...secondRow1 , ...thirdRow1 , ...forthRow1 , ...fifthRow1 , ...sixthRow1] ;
let monthDays2 = [...firstRow2 , ...secondRow2 , ...thirdRow2 , ...forthRow2 , ...fifthRow2 , ...sixthRow2] ;
//all seven days of first week of month
//year-------------------------------
//-----------------------------------
let currYear1 = getCurrYear1() ;
function getCurrYear1(){return parseInt(moment().format('jYYYY')) ;} //1398 , 1399 , ...
let currYear2 = getCurrYear2() ;
function getCurrYear2(){return parseInt(moment().format('jYYYY')) ;} //1398 , 1399 , ...
//month------------------------------
//-----------------------------------
let currMonthIndex1 = parseInt(moment().format('jMM')-1)  ; 
let currMonthIndex2 = parseInt(moment().format('jMM')-1)  ; 
//moment().format('jMM') will return : farvardin --> 01(string) , ordibehest --> 02(string) , ... but with parseInt will return 1,2,..
//because this variable should hold index of monthNames array we decrease its value by one
let monthNames = [
    'فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور',
    'مهر','آبان','آذر','دی','بهمن','اسفند'
]
let currMonth1 = getCurrMonth1() ;
let currMonth2 = getCurrMonth2() ;
function getCurrMonth1(){return monthNames[currMonthIndex1] ;}
function getCurrMonth2(){return monthNames[currMonthIndex2] ;}
//week days------------------------------
//-----------------------------------
let numDaysInMonth1 = getNumDaysInMonth1();
let numDaysInMonth2 = getNumDaysInMonth2();
function getNumDaysInMonth1(){return parseInt(moment.jDaysInMonth(currYear1,currMonthIndex1)) ;}
function getNumDaysInMonth2(){return parseInt(moment.jDaysInMonth(currYear2,currMonthIndex2)) ;}
let firstDayOfMonthWhichWeekDay1 = getFirstDayOfMonthWhichWeekDay1() ; //we want to know first day of month is what day of week from [0,6]
let firstDayOfMonthWhichWeekDay2 = getFirstDayOfMonthWhichWeekDay2() ;
function getFirstDayOfMonthWhichWeekDay1(){return parseInt(moment(`${currYear1}/${currMonthIndex1+1}/01`,'jYYYY/jMM/jDD').format('e')) ;} 
function getFirstDayOfMonthWhichWeekDay2(){return parseInt(moment(`${currYear2}/${currMonthIndex2+1}/01`,'jYYYY/jMM/jDD').format('e')) ;} 
let firstDayOfMonthElm1 = firstWeekDays1[firstDayOfMonthWhichWeekDay1] ; //element that hold first day on month 
let firstDayOfMonthElm2 = firstWeekDays2[firstDayOfMonthWhichWeekDay2] ; 
//Today-----------------------------
//----------------------------------
let currDay1 = getCurrDay1() ;
let currDay2 = getCurrDay2() ;
function getCurrDay1(){ return parseInt(moment().format('jDD')) ;}
function getCurrDay2(){ return parseInt(moment().format('jDD')) ;}
//init calender----------------------
//-----------------------------------
init1() ;
function init1(){
    year1.textContent = currYear1 ;
    month1.textContent = currMonth1 ;
    initMonthDays1() ;
}
function initMonthDays1(){
    monthDays1.forEach(day=> {
        day.textContent = '' ;
        day.classList.remove('curr') ;
        day.classList.remove('past') ;
    })
    let firstDayIndex = 1000 ; //just a random big number
    let index = 0 ; //number of day in month that will be replace inside calender
    monthDays1.forEach((day,i)=>{
        if(day == firstDayOfMonthElm1) {
            index++ ;
            day.textContent = index ;
            firstDayIndex = i ;
        }    
        if(i > firstDayIndex && index+1 <= numDaysInMonth1) {
            index++ ;
            day.textContent = index ;         
        }
        if(day.textContent == currDay1 && currMonthIndex1+1 == parseInt(moment().format('jMM')) && currYear1 == parseInt(moment().format('jYYYY'))) day.classList.add('curr') ;
        if((currYear1<parseInt(moment().format('jYYYY'))&&(day.textContent!='')) ||
           (currYear1==parseInt(moment().format('jYYYY'))&&currMonthIndex1+1<parseInt(moment().format('jMM'))&&(day.textContent!='')) || 
           (currYear1==parseInt(moment().format('jYYYY'))&&currMonthIndex1+1==parseInt(moment().format('jMM'))&&(day.textContent<currDay1)&&(day.textContent!=''))
        ) day.classList.add('past') ;
    })
}
init2() ;
function init2(){
    year2.textContent = currYear2 ;
    month2.textContent = currMonth2 ;
    initMonthDays2() ;
}
function initMonthDays2(){
    monthDays2.forEach(day=> {
        day.textContent = '' ;
        day.classList.remove('curr') ;
        day.classList.remove('past') ;
    })
    let firstDayIndex = 1000 ; //just a random big number
    let index = 0 ; //number of day in month that will be replace inside calender
    monthDays2.forEach((day,i)=>{
        if(day == firstDayOfMonthElm2) {
            index++ ;
            day.textContent = index ;
            firstDayIndex = i ;
        }    
        if(i > firstDayIndex && index+1 <= numDaysInMonth2) {
            index++ ;
            day.textContent = index ;         
        }
        if(day.textContent == currDay2 && currMonthIndex2+1 == parseInt(moment().format('jMM')) && currYear2 == parseInt(moment().format('jYYYY'))) day.classList.add('curr') ;
        if((currYear2<parseInt(moment().format('jYYYY'))&&(day.textContent!='')) ||
           (currYear2==parseInt(moment().format('jYYYY'))&&currMonthIndex2+1<parseInt(moment().format('jMM'))&&(day.textContent!='')) || 
           (currYear2==parseInt(moment().format('jYYYY'))&&currMonthIndex2+1==parseInt(moment().format('jMM'))&&(day.textContent<currDay2)&&(day.textContent!=''))
        ) day.classList.add('past') ;
    })
}
//next/prev month----------------------
//-----------------------------------
prevMonth1.addEventListener('click',function(e){
    days1.forEach(day=>day.removeEventListener('click',dayHandler1)) ;
    days1 = document.querySelectorAll('#in ~ .calender .days span:not(:first-child):not(.past)') ;
    days1.forEach(day=>day.addEventListener('click',dayHandler1)) ;
    if((currMonthIndex1-1) < 0 ) {
        currMonthIndex1 = 11 ;
        currYear1-- ;
    }
    else currMonthIndex1-- ;
    currMonth1 = getCurrMonth1() ;
    month1.textContent = currMonth1 ;
    year1.textContent = currYear1 ;
    numDaysInMonth1 = getNumDaysInMonth1();
    firstDayOfMonthWhichWeekDay1 = getFirstDayOfMonthWhichWeekDay1() ;
    firstDayOfMonthElm1 = firstWeekDays1[firstDayOfMonthWhichWeekDay1] ;
    initMonthDays1() ;
})
nextMonth1.addEventListener('click',function(e){
    days1.forEach(day=>day.removeEventListener('click',dayHandler1)) ;
    days1 = document.querySelectorAll('#in ~ .calender .days span:not(:first-child):not(.past)') ;
    days1.forEach(day=>day.addEventListener('click',dayHandler1)) ;
    if((currMonthIndex1+1)%12 == 0 ) {
        currMonthIndex1 = 0 ;
        currYear1++ ;
    }
    else currMonthIndex1++ ;
    currMonth1 = getCurrMonth1() ;
    month1.textContent = currMonth1 ;
    year1.textContent = currYear1 ;
    numDaysInMonth1 = getNumDaysInMonth1();
    firstDayOfMonthWhichWeekDay1 = getFirstDayOfMonthWhichWeekDay1() ;
    firstDayOfMonthElm1 = firstWeekDays1[firstDayOfMonthWhichWeekDay1] ;
    initMonthDays1() ;
})
prevMonth2.addEventListener('click',function(e){
    days2.forEach(day=>day.removeEventListener('click',dayHandler2)) ;
    days2 = document.querySelectorAll('#out ~ .calender .days span:not(:first-child):not(.past)') ;
    days2.forEach(day=>day.addEventListener('click',dayHandler2)) ;
    if((currMonthIndex2-1) < 0 ) {
        currMonthIndex2 = 11 ;
        currYear2-- ;
    }
    else currMonthIndex2-- ;
    currMonth2 = getCurrMonth2() ;
    month2.textContent = currMonth2 ;
    year2.textContent = currYear2 ;
    numDaysInMonth2 = getNumDaysInMonth2();
    firstDayOfMonthWhichWeekDay2 = getFirstDayOfMonthWhichWeekDay2() ;
    firstDayOfMonthElm2 = firstWeekDays2[firstDayOfMonthWhichWeekDay2] ;
    initMonthDays2() ;
})
nextMonth2.addEventListener('click',function(e){
    days2.forEach(day=>day.removeEventListener('click',dayHandler2)) ;
    days2 = document.querySelectorAll('#out ~ .calender .days span:not(:first-child):not(.past)') ;
    days2.forEach(day=>day.addEventListener('click',dayHandler2)) ;
    if((currMonthIndex2+1)%12 == 0 ) {
        currMonthIndex2 = 0 ;
        currYear2++ ;
    }
    else currMonthIndex2++ ;
    currMonth2 = getCurrMonth2() ;
    month2.textContent = currMonth2 ;
    year2.textContent = currYear2 ;
    numDaysInMonth2 = getNumDaysInMonth2();
    firstDayOfMonthWhichWeekDay2 = getFirstDayOfMonthWhichWeekDay2() ;
    firstDayOfMonthElm2 = firstWeekDays2[firstDayOfMonthWhichWeekDay2] ;
    initMonthDays2() ;
})
//show/hide calender-------------------
//-------------------------------------
let input1 = document.querySelector('#in') ;
let calender1 = document.querySelector('#in ~ .calender') ;
let input2 = document.querySelector('#out') ; 
let calender2 = document.querySelector('#out ~ .calender') ; 
let days1 = document.querySelectorAll('#in ~ .calender .days span:not(.past):not(:first-child)') ;
let days2 = document.querySelectorAll('#out ~ .calender .days span:not(:first-child):not(.past)') ;
input1.addEventListener('click',inputClickHandler1) ;
input2.addEventListener('click',inputClickHandler2) ;
let targetInput = null ;
function inputClickHandler1(e){
    targetInput = this ;
    e.stopPropagation() ;
    calender1.classList.add('show-calender') ;
    calender2.classList.remove('show-calender') ;
    document.addEventListener('click',documentClickHandler1) ;
    days1.forEach(day=>day.addEventListener('click',dayHandler1)) ;
}
function inputClickHandler2(e){
    targetInput = this ;
    e.stopPropagation() ;
    calender2.classList.add('show-calender') ;
    calender1.classList.remove('show-calender') ;
    document.addEventListener('click',documentClickHandler2) ;
    days2.forEach(day=>day.addEventListener('click',dayHandler2)) ;
}
function documentClickHandler1(e){
    let clickInsideCalender1 = calender1.contains(e.target) ;
    if(!clickInsideCalender1) {
        calender1.classList.remove('show-calender') ;  
        document.removeEventListener('click',documentClickHandler1) ;
        days1.forEach(day=>day.removeEventListener('click',dayHandler1)) ;
    }
}
function documentClickHandler2(e){
    let clickInsideCalender2 = calender2.contains(e.target) ;
    if(!clickInsideCalender2) {
        calender2.classList.remove('show-calender') ;  
        document.removeEventListener('click',documentClickHandler2) ;
        days2.forEach(day=>day.removeEventListener('click',dayHandler2)) ;
    }
}
function dayHandler1(e){
    e.stopPropagation() ;
    targetInput.setAttribute('value',`${this.textContent} ${currMonth1} ${currYear1}`) ;
    calender1.classList.remove('show-calender') ;
    document.removeEventListener('click',documentClickHandler1) ;
    days1.forEach(day=>day.removeEventListener('click',dayHandler1)) ;
}
function dayHandler2(e){
    e.stopPropagation() ;
    targetInput.setAttribute('value',`${this.textContent} ${currMonth2} ${currYear2}`) ;
    calender2.classList.remove('show-calender') ;
    document.removeEventListener('click',documentClickHandler2) ;
    days2.forEach(day=>day.removeEventListener('click',dayHandler2)) ;
}
