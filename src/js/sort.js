let inputWrapper = document.querySelector('#sort-currFilters .input-wrapper') ;
let ul = inputWrapper.querySelector('ul') ;
let input = inputWrapper.querySelector('input[type="text"]') ;
inputWrapper.addEventListener('click',wrapperHandler) ;
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