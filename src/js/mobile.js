let mobileFilter = document.querySelector('#mobile .fil') ;
let mobileSort = document.querySelector('#mobile .srt') ;
let mobileFilterWrapper = document.querySelector('#mobile-filter') ;
let mobileSortWrapper = document.querySelector('#mobile-sort') ;
mobileFilter.addEventListener('click',mobileFilterClick) ;
function mobileFilterClick(e){
    e.stopPropagation() ;
    mobileFilterWrapper.classList.toggle('show') ;
    if(mobileFilterWrapper.classList.contains('show')) document.addEventListener('click',docClick) ; 
    else document.removeEventListener('click',docClick) ;
}
function docClick(e){
    e.stopPropagation() ;
    if(!mobileFilterWrapper.contains(e.target)) {
        mobileFilterWrapper.classList.toggle('show') ;
        document.removeEventListener('click',docClick) ;
    }   
}
mobileSort.addEventListener('click',mobileSortClick) ;
function mobileSortClick(e){
    e.stopPropagation() ;
    mobileSortWrapper.classList.toggle('show') ;
    if(mobileSortWrapper.classList.contains('show')) document.addEventListener('click',docSortClick) ; 
    else document.removeEventListener('click',docSortClick) ;
}
function docSortClick(e){
    e.stopPropagation() ;
    if(!mobileSortWrapper.contains(e.target)) {
        mobileSortWrapper.classList.toggle('show') ;
        document.removeEventListener('click',docSortClick) ;
    }   
}