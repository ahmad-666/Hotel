let inputWrapper = document.querySelector('#sort-currFilters .input-wrapper') ;
inputWrapper.addEventListener('touchmove', function(e) {
    e.preventDefault() ;
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

//let currFilters = document.querySelectorAll('#curr-filters .filter') ;
// currFilters.forEach(curr=>{
//     curr.addEventListener('click',currFilterHandler) ;
// })

//add to curr filters :
let checkboxes = document.querySelectorAll('#filters input[type="checkbox"]') ;
let currWrapper = document.querySelector('#currs') ;
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change',checkboxClick) ;
})
function checkboxClick(e){
    if(this.checked){
        let filter = document.createElement('span') ;
        filter.classList.add('filter') ;
        let closeIcon = document.createElement('i') ;
        closeIcon.classList.add('fas','fa-times') ;
        let text = document.createElement('p') ;
        text.textContent = this.parentElement.querySelector('p').textContent ;
        filter.appendChild(closeIcon) ;
        filter.appendChild(text) ;
        filter.setAttribute('id',`f-${this.getAttribute('id')}`) ;
        currWrapper.appendChild(filter) ;
        filter.addEventListener('click',currFilterHandler)
    }
    else {
        let filter = currWrapper.querySelector(`#f-${this.getAttribute('id')}`) ;
        currWrapper.removeChild(filter) ;
    }

}
function currFilterHandler(e){
    this.parentElement.removeChild(this) ;
    let id = this.getAttribute('id') ;
    id = id.slice(2,id.length) ;
    document.querySelector(`#${id}`).checked = false ;
}
