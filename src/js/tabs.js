
let tabs = document.querySelector('#tabs') ;
let tabsTrigger = tabs.querySelectorAll('ul li') ;
let tabsContent = tabs.querySelectorAll('#content > div') ;
tabsContent[0].style.display = 'block' ;
tabsTrigger.forEach(trigger=>{
    trigger.addEventListener('click',tabTriggerHandler) ;
})
function tabTriggerHandler(e){
    let targetTab = tabs.querySelector(`#content #${this.getAttribute('data-tab')}`) ;
    tabsContent.forEach(content => {
        content.classList.remove('show') ;
        content.style.display="none" ;
    }) ;
    targetTab.style.display = 'block' ;
    setTimeout(()=>{
        targetTab.classList.add('show') ;
    },1)
}