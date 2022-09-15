const scrollBtn=document.querySelector(".additionalWrapper-forBtn");
const body=document.querySelector("body");

scrollBtn.onclick=()=>{
    window.scrollTo({
        top: 700,
        behavior: 'smooth'})
}
    