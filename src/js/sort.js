let sort = document.querySelector('#sort select') ;
M.FormSelect.init(sort) ;
let arrow = document.querySelector('.select-wrapper .caret');
arrow.style.opacity = 0 ;
let options = document.querySelectorAll('#sort .select-wrapper .dropdown-content li');
options.forEach(opt=>{
    console.log(2) ;
    opt.style.textAlign = 'right' ;
})   
