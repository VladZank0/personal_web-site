(function(){


    const top=document.querySelector(".header");
    const btn=document.querySelector(".buttonUP_wrapper");

    btn.onclick=()=>{
        // window.scrollTo({
        //     top: 100,
        //     behavior: 'smooth'})
        top.scrollIntoView({
            behavior:"smooth",
           
        });
    
    }

}())