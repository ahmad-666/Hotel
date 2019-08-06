
import moment from 'moment-jalaali' ;
moment.loadPersian({dialect: 'persian-modern'}) ;
import {calenderIn,calenderOut} from '../../index/scripts/calender' ;
import {daysNum} from '../../hotel/scripts/daysNum' ;
let calendersOutputs = [calenderIn.hiddenForm,calenderOut.hiddenForm] ;
calendersOutputs.forEach(output => {
    output.addEventListener('change',dayNumUpdated) ;
})
function dayNumUpdated(e){
    ;
}
//Villa Obj
//-------------------------------------------
//-------------------------------------------
function Villa(elm){
    this.elm = elm ;
    this.base = parseInt(this.elm.querySelector('.base-num').textContent) ;
    this.max = parseInt(this.elm.querySelector('.max-num')) ;
    this.price = parseInt(this.elm.querySelector('input[type="hidden"]#base-price').value) ;
    if(this.elm.querySelector('.price .discount')){
        this.discount = parseFloat(this.elm.querySelector('input[type="hidden"]#discount-val').value) ;
        this.price -= (this.price*this.discount) ;
        this.elm.querySelector('p.after-discount').textContent = `${this.price} تومان` ;
    }
    this.guestsNum = this.elm
}
new Villa(document.querySelector('.room.villa'));

