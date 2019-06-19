import anime from 'animejs' ;
let hamburgerMenu = document.querySelector('#hamburger') ;
let closeIcon = document.querySelector('#grid .fa-times') ;
let gridContainer = document.querySelector('#grid') ;
let gridItemsColors = document.querySelectorAll('#grid .color') ;
let blackGrid = document.querySelector('#grid #black') ;
let gridItemsImages = document.querySelectorAll('#grid .img') ;
let gridItemsTexts = document.querySelectorAll('#grid p') ;
let menuOpen = false ;
hamburgerMenu.addEventListener('click',e=>{
    if(!menuOpen) gridOpenAnimation() ;
    else gridCloseAnimation() ;
    menuOpen = !menuOpen ;
})
closeIcon.addEventListener('click',e=>{
    if(menuOpen) gridCloseAnimation() ;
    else gridOpenAnimation() ;
    menuOpen = !menuOpen ;
})
function gridOpenAnimation(){
    let tl = anime.timeline({
        direction: 'normal',
        loop: 1 ,
        easing: 'easeOutQuad'
    });
    tl.add({
        targets: [blackGrid,gridItemsColors] ,
        duration: 200 ,
        delay: anime.stagger(200),
        width: '100%' ,
        begin: function(){gridContainer.style.display = 'grid' ;}
    },0);
    tl.add({
        targets: gridItemsImages ,
        duration: 1 ,
        easing: 'linear',
        width: '100%' 
    },1800) ;
    tl.add({
        targets: gridItemsColors ,
        duration: 200 ,
        delay: anime.stagger(200),
        width: 0 ,
        begin: function(anim){
            anim.animatables.forEach(elm=>{
                elm.target.style.left = '' ;
                elm.target.style.right = 0 ;
            })
        }
    },1801) ;
   tl.add({
       targets: closeIcon ,
       opacity: 1
   },200) ;
   tl.add({
       targets: gridItemsTexts ,
       delay: anime.stagger(200) ,
       duration: 500 ,
       opacity: 1 ,
       top: '50%' 
   },2000)
}
function gridCloseAnimation(){
    let tl = anime.timeline({
        direction: 'normal',
        loop: 1 ,
        easing: 'easeOutQuad'
    });
    tl.add({
        targets: '#grid .fa-times' ,
        opacity: 0 ,
        duration: 300 ,
    },0)
    tl.add({
        targets: gridItemsTexts ,
        opacity: 0 ,
        top: '75%' ,
        duration: 300 ,
        delay: anime.stagger(300)
    },0)   
    tl.add({
        targets: ['#grid #black',gridItemsImages] ,
        duration: 200,
        delay: anime.stagger(200),
        width: 0 ,
        begin: function(anim){
            anim.animatables.forEach(elm=>{
                elm.target.style.left = '' ;
                elm.target.style.right = 0 ;
            })
        },
        complete: function(){
            gridContainer.style.display = 'none' ;
            gridItemsImages.forEach(elm=>{
                elm.style.width = 0 ;
                elm.style.left = 0 ;
            })
            gridItemsColors.forEach(elm=>{
                elm.style.width = 0 ;
                elm.style.left = 0 ;
                elm.style.right = '' ;
            })
            blackGrid.style.width = 0 ;
            blackGrid.style.left = 0 ;
            blackGrid.style.right = '' ;
            closeIcon.style.opacity = 0 ;
            gridItemsTexts.forEach(elm=>{
                elm.style.opacity = 0 ;
                elm.style.top = '75%' ;
            })
            
        }
    },900)
}