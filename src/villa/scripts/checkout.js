
import moment from 'moment-jalaali' ;
moment.loadPersian({dialect: 'persian-modern'}) ;
import {calenderIn,calenderOut} from '../../index/scripts/calender' ;
import {daysNum} from '../../hotel/scripts/daysNum' ;
//Open/close checkout menu
//--------------------------
//--------------------------
let checkOutTrigger = document.querySelector('#confirm button') ;
let checkout = document.querySelector('#villa-checkout') ;
checkOutTrigger.addEventListener('click',toggleCheckout) ;
function toggleCheckout(e){
    e.stopPropagation();
    checkout.classList.toggle('show') ;
    //if(checkout.classList.contains('show')) document.addEventListener('click',docHandler) ;
    //else document.removeEventListener('click',docHandler) ;
}
let closeCheckoutIcon = checkout.querySelector('.fa-times') ;
closeCheckoutIcon.addEventListener('click',closeCheckout) ;
function closeCheckout(e){
    e.stopPropagation();
    checkout.classList.remove('show') ;
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
//Villa Obj
//-------------------------------------------
//-------------------------------------------
let villaElm = document.querySelector('.room.villa') ;
function Villa(elm){
    this.elm = elm ;
    this.base = parseInt(this.elm.querySelector('.info .base-num').textContent) ;
    this.max = parseInt(this.elm.querySelector('.info .max-num').textContent) ;
    this.price = parseInt(this.elm.querySelector('.price input[type="hidden"]#base-price').value) ;
    if(this.elm.querySelector('.price .discount')){
        this.discount = parseFloat(this.elm.querySelector('.price input[type="hidden"]#discount-val').value) ;
        this.price -= (this.price*this.discount) ;
        this.elm.querySelector('.price p.after-discount').textContent = `${this.price} تومان` ;
    }
    this.extraPrice = parseInt(this.elm.querySelector('input[type="hidden"]#extra-price').value) ;
    this.checkoutPrice = 0 ;
    this.guestsNum = this.elm.querySelector('.reserve input[type="number"]#guest-num');
    this.addGuest = this.guestsNum.parentElement.querySelector('button.increase') ;
    this.reduceGuest = this.guestsNum.parentElement.querySelector('button.decrease') ;
    this.addGuest.addEventListener('click',this) ;
    this.reduceGuest.addEventListener('click',this) ;
}
Villa.prototype.handleEvent = function(e){
    if(e.type=="click"){
        if(e.currentTarget == this.addGuest) { //add handler
            this.reduceGuest.addEventListener('click',this) ;
            if(parseInt(this.guestsNum.value)+1 <= this.max){
                this.guestsNum.disabled = false ;
                this.guestsNum.value = parseInt(this.guestsNum.value) + 1 ;
                if(parseInt(this.guestsNum.value)>=1 && parseInt(this.guestsNum.value)<=this.base){
                    this.checkoutPrice = this.price*daysNum ;
                }
                else if(parseInt(this.guestsNum.value)>this.base && parseInt(this.guestsNum.value)<=this.max){
                    this.checkoutPrice+=(this.extraPrice*daysNum) ;
                }
            }
            else {
                this.guestsNum.disabled = true ;
                this.addGuest.removeEventListener('click',this) ;
            }    
            updateCheckout()  
        }
        else if(e.currentTarget == this.reduceGuest) { //reduce guest
            this.addGuest.addEventListener('click',this) ;
            if(parseInt(this.guestsNum.value)-1 >= 0){
                this.guestsNum.disabled = false ;
                this.guestsNum.value = parseInt(this.guestsNum.value) - 1 ;
                if(parseInt(this.guestsNum.value)==0){
                    this.checkoutPrice = 0 ;
                }
                else if(parseInt(this.guestsNum.value)<=this.base && parseInt(this.guestsNum.value)>0){
                    this.checkoutPrice = (this.price*daysNum) ;
                }
                else if(parseInt(this.guestsNum.value)>this.base){
                    this.checkoutPrice-=(this.extraPrice*daysNum) ;
                }
            }
            else {
                this.guestsNum.disabled = true ;
                this.reduceGuest.removeEventListener('click',this) ;
            }   
            updateCheckout()   
        }
    }
}
let villa = new Villa(villaElm);
//Init checkout----------------
//Init checkout----------------
//Init checkout----------------
let nightCountElm = checkout.querySelector('.night') ;
let basePersonElm = checkout.querySelector('.norm-price .person-num') ;
let basePriceElm = checkout.querySelector('.norm-price .price') ;
let extraPriceElm = checkout.querySelector('.extra-price .price') ;
let sumElm = checkout.querySelector('.sum .price') ;
let checkoutInfoElm = checkout.querySelector('.desc') ;
let hiddenSumElm = checkout.querySelector('input[type="hidden"]#sum-price') ;
updateCheckout() ;
function updateCheckout(){
    nightCountElm.textContent = 'مبلغ قابل پرداخت برای' +  ` ${daysNum}` + 'شب اقامت' ;
    basePersonElm.textContent = 'نرخ هر شب تا' + ' ' +  `${villa.base}` + ' ' + 'نفر' ;
    basePriceElm.textContent = `${villa.price}` + 'تومان' ;
    extraPriceElm.textContent = `${villa.extraPrice}` + 'تومان' ;
    let checkoutTemp = villa.checkoutPrice ;
    if(parseInt(villa.guestsNum.value)==0){
        checkoutTemp = 0 ;
    }
    else if(parseInt(villa.guestsNum.value)<=villa.base && parseInt(villa.guestsNum.value)>0){
        checkoutTemp = (villa.price*daysNum) ;
    }
    else if(parseInt(villa.guestsNum.value)>villa.base && parseInt(villa.guestsNum.value)<=villa.max){
        checkoutTemp+=(villa.extraPrice*daysNum) ;
    }
    sumElm.textContent = `${checkoutTemp}` + 'تومان' ;
    hiddenSumElm.value = parseInt(sumElm.textContent) ;
    checkoutInfoElm.textContent = 
        'با انتخاب این ویلا شما از تاریخ' + ' ' + `${calenderIn.today}${calenderIn.monthName}` + ' ' 
        + 'تا تاریخ' + ' ' + `${calenderOut.today}${calenderOut.monthName}` + ' ' + 'و به مدت' + ' '
        +  `${daysNum}` + ' ' + 'شب اقامت خواهید کرد';
}
//add change event on calender to update daysNum
let calenders = [calenderIn.hiddenForm,calenderOut.hiddenForm] ;
calenders.forEach(calender => {
    calender.addEventListener('change',()=>{
        updateCheckout() ;
    })
})

