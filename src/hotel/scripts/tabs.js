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
let arrows = document.querySelectorAll('#tabs .arrows .fas') ;
let animation = null ;
if(window.innerWidth < 605) swipeAnimation() ;
window.addEventListener('resize',checkSize) ;
function checkSize(e){
    if(window.innerWidth < 605) {
        if(animation) animation.play() ;   
        swipeAnimation() ;
    }
    else {
        if(animation) animation.pause() ;      
    }
}
function swipeAnimation(){
    if(!animation) {
        animation = anime({
            targets: arrows ,
            duration: 600 ,
            delay: anime.stagger(200) ,
            opacity: [0,1] ,
            easing: 'linear' ,
            loop: true ,
            direction: 'alternate'
        })
    }   
}