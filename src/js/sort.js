let sort = document.querySelectorAll('.sort select') ;
M.FormSelect.init(sort) ;
let arrows = document.querySelectorAll('.select-wrapper .caret');
arrows.forEach(arrow=>arrow.style.opacity = 0)
let options = document.querySelectorAll('.sort .select-wrapper .dropdown-content li');
options.forEach(opt=>{
    opt.style.textAlign = 'right' ;
})   
