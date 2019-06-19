let parallaxTop = document.querySelector('#parallax .bg:nth-child(1)');
let parallaxBottom = document.querySelector('#parallax .bg:nth-child(2)');
let parallaxTxt = document.querySelector('#parallax #txt');
let parallaxSmoother = Math.min(window.innerWidth,window.innerHeight)/1000 ;
window.addEventListener('scroll',e=>{
    let scroll = window.scrollY ;
    parallaxTop.style.transform = `translateY(-${scroll/8}px)`;
    parallaxBottom.style.transform = `translateY(-${scroll/2}px)`;
    parallaxTxt.style.transform = `translateY(-${scroll*3}px)`;
})