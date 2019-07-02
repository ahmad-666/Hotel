//for set grid-auto-rows vis js to always have same width/height
//----------------------------------
//----------------------------------
let grid = document.querySelector('#services form') ;
let colNum = null ;
let rowHeight = null ; //same as width of each col 
setColNum() ;
setHeight() ;
function setColNum(){
    if(window.innerWidth>1300) colNum = 8 ;
    else if(window.innerWidth<=1300 && window.innerWidth>850) colNum = 6 ;
    else if(window.innerWidth<=850 && window.innerWidth>550) colNum = 4 ;
    else if(window.innerWidth<=550) colNum = 2 ;
}
function setHeight(){
    rowHeight = grid.clientWidth/colNum ;
    grid.style.gridAutoRows = `${rowHeight}px` ;
}
window.addEventListener('resize',e=>{
    setColNum() ;
    setHeight() ;
    //grid.style.height = `calc(${rowHeight}px + 1.5em)` ;
})
//change background when we click on label
//-----------------------------------------
//-----------------------------------------
let checkboxes = document.querySelectorAll('#services label input[type="checkbox"]') ;
checkboxes.forEach((checkbox,i)=>{
    checkbox.addEventListener('input',function(e){
        this.parentNode.classList.toggle('red-bg') ;
        this.parentNode.querySelector('i').classList.toggle('white-text') ;
        this.parentNode.querySelector('p').classList.toggle('white-text') ;
    })
});
//Show all button
//-----------------------------------------
//-----------------------------------------
grid.style.height = `calc(${rowHeight}px + 1.5em)` ;
let showAll = document.querySelector('#services > p') ;
let isShowAll = false ;
let icon = document.createElement('i') ;
initShowAll() ;
function initShowAll(){
    showAll.textContent = 'نمایش همه' ;
    icon.classList.add('fas','fa-angle-down') ;
    showAll.appendChild(icon) ;
}
showAll.addEventListener('click',e=>{
    if(!isShowAll){
        //grid.style.height = 'auto' ;
        grid.style.height = 'auto' ;
        showAll.textContent = 'نمایش کمتر' ;
        icon.classList.remove('fa-angle-down') ;
        icon.classList.add('fa-angle-up') ;
        showAll.appendChild(icon) ;
    }
    else{
        grid.style.height = `calc(${rowHeight}px + 1.5em)` ;
        //grid.style.height = `20em` ;
        showAll.textContent = 'نمایش همه' ;
        icon.classList.remove('fa-angle-up') ;
        icon.classList.add('fa-angle-down') ;
        showAll.appendChild(icon) ;
    }
    isShowAll = !isShowAll ;
})






