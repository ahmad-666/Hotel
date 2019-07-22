let inputWrapper = document.querySelector('#sort-currFilters .input-wrapper') ;
inputWrapper.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, false);
let ul = inputWrapper.querySelector('ul') ;
let input = inputWrapper.querySelector('input[type="text"]') ;
input.addEventListener('click',wrapperHandler) ;
function wrapperHandler(e){  
    e.stopPropagation();
    ul.classList.add('show') ;
    let lis = ul.querySelectorAll('li') ;
    lis.forEach(li => {
        li.addEventListener('click',liHandler) ;
    }) ;
    document.addEventListener('click',docHandler);  
}
function liHandler(e){
    e.stopPropagation();
    input.value = this.textContent ;
    ul.classList.remove('show');
    document.removeEventListener('click',docHandler) ;
}
function docHandler(e){
    e.stopPropagation() ;
    let clickedElm = e.target ;
    if(!ul.contains(clickedElm)) {
        ul.classList.remove('show') ;
        document.removeEventListener('click',docHandler) ;
    }
}

let currFilters = document.querySelectorAll('#curr-filters .filter') ;
currFilters.forEach(curr=>{
    curr.addEventListener('click',currFilterHandler) ;
})
function currFilterHandler(e){
    this.classList.add('hide') ;
}
