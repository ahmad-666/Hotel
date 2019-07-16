let currFilters = document.querySelectorAll('#curr-filters .filter') ;
currFilters.forEach(curr=>{
    curr.addEventListener('click',currFilterHandler) ;
})
function currFilterHandler(e){
    this.classList.add('hide') ;
}