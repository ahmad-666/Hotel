import moment from 'moment-jalaali' ;
moment.loadPersian({dialect: 'persian-modern'}) ;
//calender html elements------------
//----------------------------------
let prevMonth = document.querySelector('.calender .fa-angle-right');
let nextMonth = document.querySelector('.calender .fa-angle-left');
let month = document.querySelector('.calender span.month') ;
let year = document.querySelector('.calender span.year') ;
let weekDays = document.querySelectorAll('.calender .days span:first-child') ;
let firstWeekDays = document.querySelectorAll('.calender .week-days span:nth-child(2)') ;
let firstRow = document.querySelectorAll('.calender .days span:nth-child(2)') ;
let secondRow = document.querySelectorAll('.calender .days span:nth-child(3)') ;
let thirdRow = document.querySelectorAll('.calender .days span:nth-child(4)') ;
let forthRow = document.querySelectorAll('.calender .days span:nth-child(5)') ;
let fifthRow = document.querySelectorAll('.calender .days span:nth-child(6)') ;
let sixthRow = document.querySelectorAll('.calender .days span:nth-child(7)') ;
let monthDays = [...firstRow , ...secondRow , ...thirdRow , ...forthRow , ...fifthRow , ...sixthRow] ;
//all seven days of first week of month
//year-------------------------------
//-----------------------------------
let currYear = getCurrYear() ;
function getCurrYear(){return moment().format('jYYYY') ;}
//month------------------------------
//-----------------------------------
let monthNames = [
    'فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور',
    'مهر','آبان','آذر','دی','بهمن','اسفند'
]
let currMonthIndex = moment().format('jMM') -1  ;
let currMonth = getCurrMonth() ;
function getCurrMonth(){return monthNames[currMonthIndex] ;}
//week days------------------------------
//-----------------------------------
let numDaysInMonth = getNumDaysInMonth();
let firstDayOfMonthWhichWeekDay = getFirstDayOfMonthWhichWeekDay() ;
//we want to know first day of month is what day of week from [0,6]
let firstDayOfMonth = firstWeekDays[firstDayOfMonthWhichWeekDay] ;
function getNumDaysInMonth(){return moment.jDaysInMonth(currYear,currMonthIndex+1) ;}
function getFirstDayOfMonthWhichWeekDay(){return moment(`${currYear}/${currMonthIndex+1}/01`,'jYYYY/jMM/jDD').format('e') ;   }
//init calender----------------------
//-----------------------------------
init() ;
function init(){
    year.textContent = currYear ;
    month.textContent = currMonth ;
    initMonthDays() ;
}
function initMonthDays(){
    monthDays.forEach(day=> day.textContent = '')
    let firstDayIndex = 1000 ;
    let index = 0 ;
    monthDays.forEach((day,i)=>{
        if(day == firstDayOfMonth) {
            index++ ;
            day.textContent = index ;
            firstDayIndex = i ;
        }    
        if(i > firstDayIndex) {
            if(index+1 <= numDaysInMonth) {
                index++ ;
                day.textContent = index ;
            }
        }
    })
}
//next/prev month----------------------
//-----------------------------------
prevMonth.addEventListener('click',function(e){
    if((currMonthIndex-1) < 0 ) {
        currMonthIndex = 11 ;
        currYear-- ;
    }
    else currMonthIndex-- ;
    currMonth = getCurrMonth() ;
    month.textContent = currMonth ;
    year.textContent = currYear ;
    numDaysInMonth = getNumDaysInMonth();
    firstDayOfMonthWhichWeekDay = getFirstDayOfMonthWhichWeekDay() ;
    firstDayOfMonth = firstWeekDays[firstDayOfMonthWhichWeekDay] ;
    initMonthDays() ;
})
nextMonth.addEventListener('click',function(e){
    if((currMonthIndex+1)%12 == 0 ) {
        currMonthIndex = 0 ;
        currYear++ ;
    }
    else currMonthIndex++ ;
    currMonth = getCurrMonth() ;
    month.textContent = currMonth ;
    year.textContent = currYear ;
    numDaysInMonth = getNumDaysInMonth();
    firstDayOfMonthWhichWeekDay = getFirstDayOfMonthWhichWeekDay() ;
    firstDayOfMonth = firstWeekDays[firstDayOfMonthWhichWeekDay] ;
    initMonthDays() ;
})
