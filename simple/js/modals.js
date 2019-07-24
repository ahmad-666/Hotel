let modalTriggers = document.querySelectorAll('#footer #support li a') ;
let black = document.querySelector('#black') ;
let modals = document.querySelectorAll('.modal') ;
modals.forEach(function(modal){   
    if(modal.querySelector('p').scrollHeight > modal.querySelector('p').clientHeight) {       
        modal.addEventListener('touchmove',hasScroll) ;
    }
    else {
        modal.addEventListener('touchmove',noScroll) ;
    }
})
function hasScroll(e){
    e.stopPropagation() ;
}
function noScroll(e){
    e.preventDefault();
}
let currModal = null ;
modalTriggers.forEach(modalTrigger=>{
    modalTrigger.addEventListener('click',modalHandler) ;
    //modals.forEach(modal=>modal.classList.remove('show')) ;
})
function modalHandler(e){
    e.stopPropagation();
    let target = document.querySelector(`#${this.getAttribute('data-modal')}`) ;
    target.classList.add('show') ;
    black.classList.add('show') ;
    currModal = target ;
    document.addEventListener('click',docHandler) ;
    let closeBtn = target.querySelector('button') ;
    closeBtn.addEventListener('click',closeHandler) ;
}
function docHandler(e){
    e.stopPropagation();
    let clickedElm = e.target ;
    if(!currModal.contains(clickedElm)) {
        currModal.classList.remove('show') ;
        black.classList.remove('show') ;
        document.removeEventListener('click',docHandler) ;
    }
}
function closeHandler(e){
    e.stopPropagation();
    currModal.classList.remove('show') ;
    black.classList.remove('show') ;
    document.removeEventListener('click',docHandler) ; 
}
