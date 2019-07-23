import anime from 'animejs' ;
function Slider(id){
    this.id = id ;
    this.sliderWrapper = document.querySelector(id) ;
    this.slider = this.sliderWrapper.querySelector('.slider') ;
    this.slide = this.slider.querySelector('.slide') ;
    this.prevBtn = this.sliderWrapper.querySelector('.btn-right') ;
    this.nextBtn = this.sliderWrapper.querySelector('.btn-left') ;
    this.arrowsWrapper = this.sliderWrapper.querySelector('.arrows') ;
    this.arrows = this.arrowsWrapper.querySelectorAll('.fas') ;
    this.curPos = 0 ;
    this.offset = null ;
    this.visibleSlidesNum = null ; //number of visible slides in viewport
    this.threshold = null ;
    this.animation = null ;
    if(window.innerWidth < 800) this.swipeAnimation() ;
    window.addEventListener('resize',this.checkSize.bind(this)) ;
}
Slider.prototype.checkSize = function(e){
    if(window.innerWidth < 800) {
        if(this.animation) this.animation.play() ;   
        this.swipeAnimation() ;
    }
    else {
        if(this.animation) this.animation.pause() ;      
    }
}
Slider.prototype.swipeAnimation = function(){
    if(!this.animation) {
        this.animation = anime({
            targets: this.arrows ,
            duration: 600 ,
            delay: anime.stagger(200) ,
            opacity: [0,1] ,
            easing: 'linear' ,
            loop: true ,
            direction: 'alternate'
        })
    }
    
}
Slider.prototype.prevBtnInit = function(){
    this.prevBtn.addEventListener('click',e=>{
        let slideWidth = this.slide.clientWidth;
        let slideMarginRight = parseInt(window.getComputedStyle(this.slide,null).getPropertyValue('margin-right'));
        let slideMarginLeft = parseInt(window.getComputedStyle(this.slide,null).getPropertyValue('margin-left'));
        this.offset = slideWidth + slideMarginRight +  slideMarginLeft;
        this.visibleSlidesNum = Math.floor(window.innerWidth / this.offset) ;
        this.threshold = 0 ;
        if(this.curPos+this.offset <= this.threshold ) this.slider.style.right = `${this.curPos+=this.offset}px` ;
    });
}
Slider.prototype.nextBtnInit = function(){
    this.nextBtn.addEventListener('click',e=>{
        let slideWidth = this.slide.clientWidth;
        let slideMarginRight = parseInt(window.getComputedStyle(this.slide,null).getPropertyValue('margin-right'));
        let slideMarginLeft = parseInt(window.getComputedStyle(this.slide,null).getPropertyValue('margin-left'));
        this.offset = slideWidth + slideMarginRight +  slideMarginLeft;
        this.visibleSlidesNum = Math.floor(window.innerWidth / this.offset) ;
        this.threshold = (this.slider.childElementCount - this.visibleSlidesNum+1)*this.offset ;
        if(Math.abs(this.curPos-this.offset) <= this.threshold) this.slider.style.right = `${this.curPos-=this.offset}px` ;
    });
}
if(document.querySelector('#discount')){
    let discountSlider = new Slider('#discount') ;
    discountSlider.prevBtnInit() ;
    discountSlider.nextBtnInit() ;
}
if(document.querySelector('#top')) {
    let topSlider = new Slider('#top') ;
    topSlider.prevBtnInit() ;
    topSlider.nextBtnInit() ;
}
if(document.querySelector('#suggestion')){
    let suggestionsSlider = new Slider('#suggestion') ;
    suggestionsSlider.prevBtnInit() ;
    suggestionsSlider.nextBtnInit() ;
}
