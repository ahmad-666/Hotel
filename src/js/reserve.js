//Increase/Decrease room-num
//--------------------------
//--------------------------
let increaseBtn = document.querySelector('.room button#increase') ;
let decreaseBtn = document.querySelector('.room button#decrease') ;
let roomNum = document.querySelector('.room .room-num input[type="number"]') ;
increaseBtn.addEventListener('click',e=>{
    roomNum.value++ ;
})
decreaseBtn.addEventListener('click',e=>{
    (roomNum.value-1>=0)?(roomNum.value--):(roomNum.value) ;
})
//features tooltip
//--------------------------
//--------------------------
let tooltips = document.querySelectorAll('#rooms .features .tooltipped') ;
let tooltipConfig = {
    position: 'top' 
}
let wifiTooltip = 'وای فای' ;
tooltips.forEach(tooltip=>{
    if([...tooltip.classList].join().includes('wifi')){
        M.Tooltip.init(tooltip,{
            ...tooltipConfig ,
            html: `<span class="white-text">${wifiTooltip}</span>`
        })
    }
})
//Open calender grid
//--------------------------
//--------------------------
