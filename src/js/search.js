let autocomplete = document.querySelector('#search .autocomplete') ;
let config = {
    data:{
        "شهر۱": null ,
        "شهر۲": null ,
        "شهر۳": null ,
        "شهر۴": null ,
        "شهر۵": null ,
        "شهر۶": null ,
        "شهر۷": null ,
        "شهر۸": null ,
    },
    limit: 2,
    minLength : 2	
};
M.Autocomplete.init(autocomplete,config);
