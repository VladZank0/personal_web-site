(function(){
    let d = document;
    let anchors = d.querySelectorAll("a")

    anchors.forEach(item => {
        item.addEventListener("click", (e)=>{

            e.preventDefault();
            
           const block_id = item.getAttribute("href");

           d.querySelector(block_id).scrollIntoView({
                block:"start",
                behavior:"smooth"
           })

        })
    })

}())