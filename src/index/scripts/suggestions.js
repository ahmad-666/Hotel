function Slider(id){
    this.id = id ;
    this.sliderWrapper = document.querySelector(id) ;
    this.slider = this.sliderWrapper.querySelector('.slider') ;
    this.slide = this.slider.querySelector('.slide') ;
    this.prevBtn = this.sliderWrapper.querySelector('.btn-right') ;
    this.nextBtn = this.sliderWrapper.querySelector('.btn-left') ;
    this.curPos = 0 ;
    this.offset = null ;
    this.visibleSlidesNum = null ; //number of visible slides in viewport
    this.threshold = null ;
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
let discountSlider = new Slider('#discount') ;
discountSlider.prevBtnInit() ;
discountSlider.nextBtnInit() ;
let topSlider = new Slider('#top') ;
topSlider.prevBtnInit() ;
topSlider.nextBtnInit() ;
let suggestionsSlider = new Slider('#suggestion') ;
suggestionsSlider.prevBtnInit() ;
suggestionsSlider.nextBtnInit() ;