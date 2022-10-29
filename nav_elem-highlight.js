window.addEventListener("scroll",()=>{

    let scrollDistance = window.scrollY;
   
    let sections = document.querySelectorAll(".section");

    sections.forEach((el,i) => {
        if(el.offsetTop - document.querySelector(".navigation").clientHeight <= scrollDistance) {
            document.querySelectorAll(".navigation_ul-link a").forEach((el) =>{
                if(el.classList.contains("active")){
                    el.classList.remove("active");
                }
            });
            
            document.querySelectorAll(".navigation_ul-link")[i].querySelector('a').classList.add("active");
        }

        
    })
    
})
    
 