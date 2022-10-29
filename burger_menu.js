(function(){

let d = document;
let btn_wrapper = d.querySelector(".toggle_wrapper");
let btn = d.querySelector(".toggle");
let menu = d.querySelector(".burger_menu");
let nav = d.querySelector(".navigation_ul.burger");
let menu_item = d.querySelectorAll(".menu_item");

    btn_wrapper.addEventListener('click', ()=>{
        btn.classList.toggle("active");
        btn_wrapper.classList.toggle("active");
        menu.classList.toggle("active");
        nav.classList.toggle("active");

    })

    menu_item.forEach(item => {
        item.addEventListener("click",()=>{
           
            btn.classList.toggle("active");
            btn_wrapper.classList.toggle("active");
            menu.classList.toggle("active");
            nav.classList.toggle("active");
          
        })
    });
}())