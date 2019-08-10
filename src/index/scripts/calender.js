import moment from 'moment-jalaali' ;
moment.loadPersian({dialect: 'persian-modern'}) ;

function Calender(elm,needThreshold,compareTo){
    //html elements
    this.elm = elm ;
    this.needThreshold = needThreshold ; //do we need to validate its value or not
    this.compareTo = compareTo ; //other calender object(only for validation)
    this.input = this.elm.parentElement.querySelector('input[type="text"]') ;
    this.input.addEventListener('click',this.inputHandler.bind(this)) ;
    this.hiddenForm = this.elm.querySelector('input[type="hidden"]') ;
    this.yearElm = this.elm.querySelector('.month-year .year') ;
    this.monthElm = this.elm.querySelector('.month-year .month') ;
    this.prevBtn = this.elm.querySelector('.month-year .fa-chevron-right') ;
    this.prevBtn.addEventListener('click',this.prevMonthHandler.bind(this)) ;
    this.nextBtn = this.elm.querySelector('.month-year .fa-chevron-left') ;
    this.nextBtn.addEventListener('click',this.nextMonthHandler.bind(this)) ;
    this.week = this.elm.querySelectorAll('.days > div') ; //saturday,sunday,...
    this.monthDays = [] ; //all elements that hold one day of month
    this.clickableDays = [] ; //days that we can click on them(not past days)
    //properties
    this.monthNames = [
        'فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور',
        'مهر','آبان','آذر','دی','بهمن','اسفند'] ;
    let _this = this ;
    this.currDate = {
        year: parseInt(moment().format('jYYYY')),
        monthIndex: moment().format('jMM')-1,
        monthName: _this.monthNames[moment().format('jMM')-1],
        today: parseInt(moment().format('jDD')) 
    } //we need current date and we never change it 
    this.year = this.currDate.year ; //we will change it later(when we press next/prev btn)
    this.monthIndex = this.currDate.monthIndex ; //we will change it later(when we press next/prev btn) , [0,11]
    this.monthName = this.currDate.monthName ; //we will change it later(when we press next/prev btn) 
    this.today = this.currDate.today ; //we will change it later(when we press clickable day) 
    this.monthNumDays = moment.jDaysInMonth(this.year,this.monthIndex) ;
    this.firstMonthDay = parseInt(moment(`${this.year}/${this.monthIndex+1}/01`,'jYYYY/jMM/jDD').format('e')) ; //first day of month is which day week [0,6]
    this.create() ;
}
Calender.prototype.create = function(){ //init current year,month,html,...
    //set month,year
    this.yearElm.textContent = this.year ;
    this.monthElm.textContent = this.monthName ;
    //empty all month days(reset to defauly setting)
    this.monthDays.forEach(monthDay => {
        monthDay.textContent = '' ;
        monthDay.classList.remove('empty') ;
        monthDay.classList.remove('curr') ;
        monthDay.classList.remove('past') ;
    })
    this.clickableDays.forEach(clickableDay => {
        clickableDay.removeEventListener('click',this) ;
    })
    //get all days of month
    let firstRow = this.elm.querySelectorAll('.days > div span:nth-child(2)') ; //first row of current month(month days) ... first day on month is here 
    let secondRow = this.elm.querySelectorAll('.days > div span:nth-child(3)') ;
    let thirdRow = this.elm.querySelectorAll('.days > div span:nth-child(4)') ;
    let forthRow = this.elm.querySelectorAll('.days > div span:nth-child(5)') ;
    let fifthRow = this.elm.querySelectorAll('.days > div span:nth-child(6)') ;
    let sixthRow = this.elm.querySelectorAll('.days > div span:nth-child(7)') ;
    this.monthDays = [...firstRow,...secondRow,...thirdRow,...forthRow,...fifthRow,...sixthRow] ;
    //find first month day and give value to other days of month
    let firstMonthDayIndex = null ;
    let dayIndex = null ;
    this.monthDays.forEach((monthDay,i) => {  
        if(monthDay == firstRow[this.firstMonthDay]) {//find first day of month
            monthDay.textContent = 1 ;
            firstMonthDayIndex = i ;
            dayIndex = 1 ;      
        }
        else if(firstMonthDayIndex!=null && i>firstMonthDayIndex && dayIndex+1<=this.monthNumDays) {//set value for other days of month
            monthDay.textContent = (++dayIndex) ;     
        }
        else monthDay.classList.add('empty') ; //hide html elements that are not related to current month 
        if(monthDay.textContent == this.currDate.today && this.monthElm.textContent == this.currDate.monthName && this.yearElm.textContent == this.currDate.year) {
            monthDay.classList.add('curr') ;
        }//find today
        if((this.yearElm.textContent < this.currDate.year) || (this.yearElm.textContent == this.currDate.year && this.monthIndex < this.currDate.monthIndex) || (this.yearElm.textContent == this.currDate.year && this.monthIndex == this.currDate.monthIndex && monthDay.textContent < this.currDate.today)){
            monthDay.classList.add('past') ;
        }  
    })
    this.clickableDays = this.monthDays.filter(monthDay => {
        return (!monthDay.classList.contains('past')) ;
    })
    this.clickableDays.forEach(clickableDay => {
        clickableDay.addEventListener('click',this) ;
    })

}
Calender.prototype.prevMonthHandler = function(){ 
    this.monthIndex = ((this.monthIndex-1)>=0) ? (this.monthIndex-1) : 11 ; 
    this.year = (this.monthIndex==11) ? (this.year-1) : (this.year) ;  
    this.monthName = this.monthNames[this.monthIndex] ; 
    this.monthNumDays = moment.jDaysInMonth(this.year,this.monthIndex) ;
    this.firstMonthDay = parseInt(moment(`${this.year}/${this.monthIndex+1}/01`,'jYYYY/jMM/jDD').format('e')) ;
    this.create() ;
}
Calender.prototype.nextMonthHandler = function(){ 
    this.monthIndex = ((this.monthIndex+1)%12!=0) ? (this.monthIndex+1) : 0 ; 
    this.year = (this.monthIndex==0) ? (this.year+1) : (this.year) ; 
    this.monthName = this.monthNames[this.monthIndex] ; 
    this.monthNumDays = moment.jDaysInMonth(this.year,this.monthIndex) ;
    this.firstMonthDay = parseInt(moment(`${this.year}/${this.monthIndex+1}/01`,'jYYYY/jMM/jDD').format('e')) ;
    this.create() ;
}
Calender.prototype.handleEvent = function(e){
    e.stopPropagation() ;
    if(this.elm.contains(e.target)){ //click inside calender
        if(e.target.classList.contains('month-day') && !e.target.classList.contains('past')){
            this.today = e.target.textContent ;     
            if(!this.needThreshold){
                this.input.value = `${e.target.textContent} ${this.monthName} ${this.year}` ;
                this.input.parentElement.querySelector('label').classList.add('up') ;
                //this.hiddenForm.value = `${this.year}/${this.monthIndex+1}/${this.today} 12:00:00` ; //set form input value
                let tmpMonthIndex = null ; //for times when monthIndex+1 is smaller than 10 and we want to append 0 to start of it
                let tmtToday = null ;
                if(this.monthIndex+1<10) tmpMonthIndex = `0${this.monthIndex+1}` ;
                else tmpMonthIndex = `${this.monthIndex+1}`;
                if(this.today<10) tmtToday = `0${this.today}`;
                else tmtToday = `${this.today}`;
                this.hiddenForm.value = `${this.year}/${tmpMonthIndex}/${tmtToday}` ; //set form input value
                
                this.elm.classList.remove('show') ;
                //console.log(this.hiddenForm.value) ;
                //if current calender has no threshold we need to remove all values from other calender
                this.compareTo.input.value = '' ;
                this.compareTo.input.parentElement.querySelector('label').classList.remove('up') ;
                this.compareTo.hiddenForm.value = `` ;
                //this.compareTo.elm.classList.remove('show') ;
                let evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                this.hiddenForm.dispatchEvent(evt);
                document.removeEventListener('click',this) ;
            }
            else { //we need to check its value and validate it
                if(this.checkThreshold(this.compareTo)){//we validate it 
                    this.input.value = `${e.target.textContent} ${this.monthName} ${this.year}` ;
                    this.input.parentElement.querySelector('label').classList.add('up') ;
                    let tmpMonthIndex = null ; //for times when monthIndex+1 is smaller than 10 and we want to append 0 to start of it
                    let tmtToday = null ;
                    if(this.monthIndex+1<10) tmpMonthIndex = `0${this.monthIndex+1}` ;
                    else tmpMonthIndex = `${this.monthIndex+1}`;
                    if(this.today<10) tmtToday = `0${this.today}`;
                    else tmtToday = `${this.today}`;
                    this.hiddenForm.value = `${this.year}/${tmpMonthIndex}/${tmtToday}` ; //set form input value
                    this.elm.classList.remove('show') ;
                    //console.log(this.hiddenForm.value) ;
                    let evt = document.createEvent("HTMLEvents");
                    evt.initEvent("change", false, true);
                    this.hiddenForm.dispatchEvent(evt);
                    document.removeEventListener('click',this) ;
                }
            }      
        }
        else ;
    }
    else {//click outside of calender
        this.elm.classList.remove('show') ;
        document.removeEventListener('click',this) ;
    }
}
Calender.prototype.inputHandler = function(e){
    e.stopPropagation();
    this.elm.classList.add('show') ;
    document.querySelectorAll('.calender').forEach(calender => {
        if(this.elm != calender) calender.classList.remove('show') ;
    })
    document.addEventListener('click',this) ;
}
Calender.prototype.checkThreshold = function(otherCalender){ //this function prevents us from selecting dates before 'otherCalender'
    //when we have date-in and date-out we should add this function to date-out to prevent us from selecting dates before date-in
    let otherCalenderDate = moment(`${otherCalender.year}/${otherCalender.monthIndex+1}/${otherCalender.today}`,'jYYYY/jMM/jDD').format('YYYY/MM/DD') ;
    let currDate = moment(`${this.year}/${this.monthIndex+1}/${this.today}`,'jYYYY/jMM/jDD').format('YYYY/MM/DD') ;
    return (new Date(currDate).getTime() >= new Date(otherCalenderDate).getTime()) ;
    //if we change it to :
    //return (new Date(currDate).getTime() > new Date(otherCalenderDate).getTime()) ; 
    //then we cant select that date that we select in date-in
}
let calenderIn ;
let calenderOut ;
calenderIn = new Calender(document.querySelector('#search .input-wrapper  input[type="text"]#in ~ .calender'),false,null) ;
calenderOut = new Calender(document.querySelector('#search .input-wrapper  input[type="text"]#out ~ .calender'),true,calenderIn) ;
//we set second parameter to true so now everytime we click on new day we check its value and only if selected date is higher than 
//date-in calender we select it
calenderIn.compareTo = calenderOut ;
export {
    calenderIn ,
    calenderOut
} ;