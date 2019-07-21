//for set grid-auto-rows vis js to always have same width/height
//----------------------------------
//----------------------------------
let checkboxes = document.querySelectorAll('#services label input[type="checkbox"]') ;
checkboxes.forEach((checkbox,i)=>{
    checkbox.addEventListener('click',function(e){
        this.parentNode.classList.toggle('red-bg') ;
        this.parentNode.querySelector('i').classList.toggle('white-text') ;
        this.parentNode.querySelector('p').classList.toggle('white-text') ;
    })
});
//Show all button
//-----------------------------------------
//-----------------------------------------
let form = document.querySelector('#services form') ;
let showElm = document.querySelector('#services > p') ;
let icon = null ;
showAllInit() ;
function showAllInit(){
    icon = document.createElement('i') ;
    icon.classList.add('fas','fa-angle-down') ;
    showElm.textContent = 'نمایش همه' ;
    showElm.appendChild(icon) ;
}
showElm.addEventListener('click',function(e){
    form.classList.toggle('show-all') ;
    if(form.classList.contains('show-all')){
        showElm.textContent = 'نمایش کمتر' ;
        icon.classList.remove('fa-angle-down') ;
        icon.classList.add('fa-angle-up') ;
        showElm.appendChild(icon) ;
    }
    else{
        showElm.textContent = 'نمایش همه' ;
        icon.classList.remove('fa-angle-up') ;
        icon.classList.add('fa-angle-down') ;
        showElm.appendChild(icon) ;
    }
})






