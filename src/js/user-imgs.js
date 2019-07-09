let imgs = document.querySelectorAll('.comment .img') ;
imgs.forEach(img=>{
    img.addEventListener('click',function(e){
        let fullImg = document.createElement('div') ;
        fullImg.classList.add('full-img') ;
        let bgImg = document.createElement('div') ;
        bgImg.style.backgroundImage = window.getComputedStyle(this,null).getPropertyValue('background-image') ;
        let text = document.createElement('p') ;
        text.textContent = this.getAttribute('data-text');
        let closeIcon = document.createElement('i') ;
        closeIcon.classList.add('fas','fa-times') ;
        fullImg.appendChild(bgImg) ;
        fullImg.appendChild(text) ;
        fullImg.appendChild(closeIcon) ;
        document.body.appendChild(fullImg) ;
        closeIcon.addEventListener('click',function(e){
            document.body.removeChild(fullImg) ;
        })
        
    })
})
