import anime from 'animejs' ;
let tabs = document.querySelector('#tabs') ;
let tabsTrigger = tabs.querySelectorAll('ul li') ;
let tabsContent = tabs.querySelectorAll('#content > div') ;
let prevActiveTabIndex = 0 ; 
let newActiveTabIndex = null ;
let offset = null ;
tabsContent[0].style.display = 'block' ;
tabsTrigger.forEach(trigger=>{
    trigger.addEventListener('click',tabTriggerHandler) ;
})
function tabTriggerHandler(e){
    let targetTab = tabs.querySelector(`#content #${this.getAttribute('data-tab')}`) ;
    tabsTrigger.forEach((tab,i)=>{
        if(tab.classList.contains('active')) prevActiveTabIndex = i ;
        if(tab == this) newActiveTabIndex = i ;
        tab.classList.remove('active') ;
    })
    this.classList.add('active') ;
    tabsContent.forEach(content => {
        content.classList.remove('show') ;
        content.style.display="none" ;
    }) ;
    targetTab.style.display = 'block' ;
    setTimeout(()=>{
        targetTab.classList.add('show') ;
    },1)
    // if(window.innerWidth < 600) {
    //     offset = tabs.clientWidth/2 ;
    //     if(newActiveTabIndex > prevActiveTabIndex) {
    //         anime({
    //             targets: tabsTrigger ,
    //             easing: 'linear' ,
    //             duration: 300 ,
    //             delay: 0 ,
    //             translateX: `+=${offset}`
    //         })
    //     }
    //     else if(newActiveTabIndex <prevActiveTabIndex) {
    //         anime({
    //             targets: tabsTrigger ,
    //             easing: 'linear' ,
    //             duration: 300 ,
    //             delay: 0 ,
    //             translateX: `-=${offset}`
    //         })
    //     }
        
    // }
}
// if(window.innerWidth < 600) {
//     tabs.querySelector('ul').addEventListener('mousedown',dragStart) ;
// }
// function dragStart(e){
//     this.addEventListener('mousemove',dragging) ;
// }
// function dragging(e){
//     console.log(e.x) ;
// }