let sortTrigger = document.querySelector('#mobile #mobile-sort') ;
let filterTrigger = document.querySelector('#mobile #mobile-filter') ;
let sort = document.querySelector('#sort-currFilters .input-wrapper') ;
let filter = document.querySelector('#filters-hotels #filters') ;
sortTrigger.addEventListener('click',sortHandler) ;
filterTrigger.addEventListener('click',filterHandler) ;
function sortHandler(e){
    e.stopPropagation();
    sort.classList.toggle('show') ;
    filter.classList.remove('show') ;
    document.addEventListener('click',sortDocHandler) ;
}
function sortDocHandler(e){
    e.stopPropagation();
    let clickedElm = e.target ;
    if(!sort.contains(clickedElm)) sort.classList.remove('show') ;
}
function filterHandler(e){
    e.stopPropagation();
    filter.classList.toggle('show') ;
    sort.classList.remove('show') ;
    document.addEventListener('click',filterDocHandler) ;
}
function filterDocHandler(e){
    e.stopPropagation();
    let clickedElm = e.target ;
    if(!filter.contains(clickedElm)) filter.classList.remove('show') ;
}
let mobile = document.querySelector('#mobile') ;
let currFilters = document.querySelector('#curr-filters') ;
let footer = document.querySelector('#footer') ;
let betweenCurrAndFooter = false ; //if #mobile is between currFilters and footer
let less850 = false ; //if size of screen is less than 850
if(window.innerWidth >= 850) less850 = false ;
else less850 = true ;
if(less850) window.addEventListener('scroll',scrollHandler) ;   
else {
    mobile.classList.remove('show') ;
    window.removeEventListener('scroll',scrollHandler) ;   
}
window.addEventListener('resize',resizeHandler) ;
function resizeHandler(e){
    if(window.innerWidth >= 850) less850 = false ;
    else less850 = true ;
    if(less850) window.addEventListener('scroll',scrollHandler) ;   
    else {
        mobile.classList.remove('show') ;
        window.removeEventListener('scroll',scrollHandler) ;  
    }
}
function scrollHandler(e){
    if(currFilters.getBoundingClientRect().top < window.innerHeight && footer.getBoundingClientRect().top > window.innerHeight) betweenCurrAndFooter = true ;
    else betweenCurrAndFooter = false ;
    if(betweenCurrAndFooter) mobile.classList.add('show') ;
    else mobile.classList.remove('show') ;
}