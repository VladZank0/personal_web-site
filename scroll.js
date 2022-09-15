const scrollBtn=document.querySelector(".additionalWrapper-forBtn");
const body=document.querySelector("body");

const fixed_nav=document.querySelector(".navigation");

scrollBtn.onclick=()=>{
    // window.scrollTo({
    //     top: 100,
    //     behavior: 'smooth'})
    fixed_nav.scrollIntoView({
        behavior:"smooth",
       
    });

}
  
