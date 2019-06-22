let sliderConfig = {
    height: 500 ,
    duration: 500 ,
    interval: 4000 ,
    indicators : true 
}
let slider = document.querySelector('.slider') ;
let sliderInstance = M.Slider.init(slider,sliderConfig) ;