
import moment from 'moment-jalaali' ;
moment.loadPersian({dialect: 'persian-modern'}) ;
import {calenderIn,calenderOut} from '../../index/scripts/calender' ;
import {daysNum} from '../../hotel/scripts/daysNum' ;
//Open/close checkout menu
//--------------------------
//--------------------------
let hotelCheckoutTriggers = document.querySelectorAll('#rooms .hotel .reserve > button') ;
hotelCheckoutTriggers.forEach(hotelCheckout => {
    hotelCheckout.addEventListener('click',toggleCheckout) ;
})
let hotelCheckout = document.querySelector('#hotel-checkout') ;
function toggleCheckout(e){
    e.stopPropagation();
    console.log()
    hotelCheckout.classList.add('show') ;
    //if(checkout.classList.contains('show')) document.addEventListener('click',docHandler) ;
    //else document.removeEventListener('click',docHandler) ;
}
let closeCheckoutIcon = hotelCheckout.querySelector('.fa-times') ;
closeCheckoutIcon.addEventListener('click',closeCheckout) ;
function closeCheckout(e){
    e.stopPropagation();
    hotelCheckout.classList.remove('show') ;
    document.removeEventListener('click',docHandler) ;
}
function docHandler(e){
    e.stopPropagation();
    let clickedElm = e.target ;
    if(!checkout.contains(clickedElm)) {
        checkout.classList.remove('show') ;
        document.removeEventListener('click',docHandler) ;
    }
}
//Hotel Obj
//-------------------------------------------
//-------------------------------------------
let checkoutHotelsWrapper = hotelCheckout.querySelector('.hotels') ;
function Hotel(elm){
    this.elm = elm ;
    this.name = this.elm.querySelector('.info .room-name').textContent ;
    this.id = this.elm.getAttribute('id') ;
    this.price = parseInt(this.elm.querySelector('.price .before-discount input[type="hidden"]').value) ;    
    if(this.elm.querySelector('.price .discount')){
        this.discount = parseFloat(this.elm.querySelector('.price > input[type="hidden"]').value) ;
        this.price-=(this.price*this.discount) ;
        this.elm.querySelector('.price .after-discount').textContent = `${this.price}` + ' ' + 'تومان'
    }
    this.addRoom = this.elm.querySelector('.reserve button.increase') ;
    this.reduceRoom= this.elm.querySelector('.reserve button.decrease') ;
    this.roomNum = this.elm.querySelector('.reserve input[type="number"]') ;
    this.maxRoom = parseInt(this.elm.querySelector('input[type="hidden"]').value);
    this.addRoom.addEventListener('click',this) ;
    this.reduceRoom.addEventListener('click',this) ; 
    this.checkout = 0 ;
}
Hotel.prototype.handleEvent = function(e){
    if(e.type=='click'){
        if(e.currentTarget == this.addRoom){
            this.reduceRoom.addEventListener('click',this) ; 
            if(parseInt(this.roomNum.value)+1 <= this.maxRoom){
                this.roomNum.disabled = false ;
                this.roomNum.value = parseInt(this.roomNum.value) + 1 ;
                this.checkout = this.price*daysNum*parseInt(this.roomNum.value) ;
                this.addToCheckout() ;
                updateCheckout() ;
            }
            else{
                this.roomNum.disabled = true ;
                this.addRoom.removeEventListener('click',this) ;
            }
        }
        else if(e.currentTarget == this.reduceRoom){
            this.addRoom.addEventListener('click',this) ; 
            if(parseInt(this.roomNum.value)-1 >= 0){
                this.roomNum.disabled = false ;
                this.roomNum.value = parseInt(this.roomNum.value) - 1 ;
                this.checkout = this.price*daysNum*parseInt(this.roomNum.value)
                this.removeFromCheckout() ;
                updateCheckout() ;
            }
            else{
                this.roomNum.disabled = true ;
                this.reduceRoom.removeEventListener('click',this) ;
            }
        }
    }
}
Hotel.prototype.addToCheckout = function(){
    let hotelExisted = false ;
    let currentHotels = checkoutHotelsWrapper.querySelectorAll('.hotel') ;
    let currHotel = null ;
    currentHotels.forEach(hotel => {
        if(hotel.getAttribute('id') == `checkout-${this.id}`) {
            hotelExisted = true ;
            currHotel = hotel ;
        }
    })
    if(!hotelExisted){
        let hotelElm = document.createElement('DIV') ;
        hotelElm.classList.add('hotel') ;
        hotelElm.setAttribute('id',`checkout-${this.id}`) ;
        let name = document.createElement('P') ;
        name.classList.add('name') ;
        let price = document.createElement('P') ;
        price.classList.add('price') ;
        name.textContent =  `${this.name}` + ' ' + `(۱عدد)` ;
        price.textContent = `${this.checkout} تومان` ;
        hotelElm.appendChild(name) ;
        hotelElm.appendChild(price) ;
        checkoutHotelsWrapper.appendChild(hotelElm) ;
    }
    else{
        currHotel.querySelector('.name').textContent = `${this.name}` + ' ' + `(${this.roomNum.value}عدد)` ; 
        currHotel.querySelector('.price').textContent = `${this.checkout} تومان` ;
    }
}
Hotel.prototype.removeFromCheckout = function(){
    let hotelExisted = false ;
    let currentHotels = checkoutHotelsWrapper.querySelectorAll('.hotel') ;
    let currHotel = null ;
    currentHotels.forEach(hotel => {
        if(hotel.getAttribute('id') == `checkout-${this.id}`) {
            hotelExisted = true ;
            currHotel = hotel ;
        }
    })
    if(!hotelExisted){
        ;
    }
    else{
        if(this.roomNum.value != 0){
            currHotel.querySelector('.name').textContent = `${this.name}` + ' ' + `(${this.roomNum.value}عدد)` ; 
            currHotel.querySelector('.price').textContent = `${this.checkout} تومان` ;
        }
        else{
            checkoutHotelsWrapper.removeChild(currHotel) ;
        }
        
    }
}
Hotel.prototype.updateDate = function(){
    this.checkout = this.price*daysNum*parseInt(this.roomNum.value) ;
}
let hotels = [] ;
let hotelElms = [...document.querySelectorAll('.room.hotel')] ;
hotelElms.forEach(hotelElm => {
    hotels.push(new Hotel(hotelElm)) ;
})
// //Init checkout----------------
// //Init checkout----------------
// //Init checkout----------------
let nightCount = hotelCheckout.querySelector('.night') ;
let desc = hotelCheckout.querySelector('.desc') ;
let sum = hotelCheckout.querySelector('.sum .price') ;
updateCheckout() ;
function updateCheckout(){
    nightCount.textContent = 'مبلغ قابل پرداخت برای' + ' ' + `${daysNum}` + ' ' + 'شب اقامت' ;
    desc.textContent = 'با انتخاب این هتل شما از تاریخ' + ' ' + `${calenderIn.today}${calenderIn.monthName}` 
    + ' ' + 'تا تاریخ' + ' ' + `${calenderOut.today}${calenderOut.monthName}`
    + ' ' + 'و به مدت' + `${daysNum}` + 'شب اقامت خواهید کرد' ;
    checkoutHotelsWrapper.querySelectorAll('.hotel').forEach(hotel => {
        let currInstance = null ;
        hotels.forEach(hotelInstance => {
            if(`checkout-${hotelInstance.elm.getAttribute('id')}` == hotel.getAttribute('id')) currInstance = hotelInstance;
        })
        hotel.querySelector('.price').textContent = `${currInstance.checkout} تومان` ;
    })
    let sumCheckout = 0 ;
    hotels.forEach(hotel => {
        sumCheckout+=hotel.checkout ;
    })
    sum.textContent = `${sumCheckout} تومان` ;
    hotelCheckout.querySelector('input[type="hidden"]#sum-hotel').value = sumCheckout ;
}
//trigger on calender changing 
let calenders = [calenderIn.hiddenForm,calenderOut.hiddenForm] ;
calenders.forEach(calender => {
    calender.addEventListener('change',calenderChange) ;
})
function calenderChange(e){
    hotels.forEach(hotel => {
        hotel.updateDate() ;
    })
    updateCheckout() ;
}