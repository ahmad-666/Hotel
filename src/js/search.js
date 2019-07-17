let inputs = document.querySelectorAll('#search .input-wrapper input[type="text"],input[type="number"]') ;
inputs.forEach(input=>{
    input.addEventListener('change',inputHandler) ;
})
function inputHandler(e){
    let label = this.parentElement.querySelector('label') ;
    if(this.value.length>0) label.classList.add('up') ;
    else label.classList.remove('up') ;
}
//AutoComplete----------------------------
//AutoComplete----------------------------
//AutoComplete----------------------------
function AutoComplete(elm,config){
    this.elm = elm ;
    this.wrapper = this.elm.parentElement ;
    this.ul = this.wrapper.querySelector('ul') ;
    this.data = config.data ;
    this.maxFinds = config.maxFinds ; //max number of finds
    this.startFrom = config.startFrom ; //start search after certain number of chars
    this.elm.addEventListener('input',this.search.bind(this)) ;
}
AutoComplete.prototype.search = function(e){
    e.stopPropagation();
    let value = this.elm.value.toLowerCase() ; 
    let finds = [] ;
    this.ul.innerHTML = "" ;
    if(value.length >= this.startFrom){
        this.data.forEach(d=>{
            if(d.toLowerCase().startsWith(value)){
                finds.push(d) ;
            }
        })
    }
    finds.forEach((find,i)=>{
        if(i==0) {
            document.addEventListener('click',this) ;
            this.ul.classList.add('show') ;
        }
        if(i < this.maxFinds) {
            let li = document.createElement('li') ;
            li.textContent = find;
            li.addEventListener('click',this.liHandler.bind(this,li)) ;
            this.ul.appendChild(li) ;
        }     
    })
    
}
AutoComplete.prototype.handleEvent = function(e){
    e.stopPropagation();
    let clickedElm = e.target ;
    if(!this.ul.contains(clickedElm)){
        document.removeEventListener('click',this) ;
        this.ul.innerHTML = "" ;
        this.ul.classList.remove('show') ;
    }
}
AutoComplete.prototype.liHandler = function(li,e){
    e.stopPropagation() ;
    this.elm.value = li.textContent ;
    document.removeEventListener('click',this) ;
    this.ul.innerHTML = "" ;
    this.ul.classList.remove('show') ;
}
if(document.querySelector('#search input[type="text"].auto-complete')) {
    let autoCompleteElm = document.querySelector('#search input[type="text"].auto-complete');
    let data = autoCompleteElm.parentElement.querySelector('ul').getAttribute('data-auto').split(',')
    let autoCompleteConfig = {
        data ,
        maxFinds: 5 ,
        startFrom: 2
    }
    new AutoComplete(autoCompleteElm,autoCompleteConfig) ;
}
