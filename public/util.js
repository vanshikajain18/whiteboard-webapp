

function createSticky(element)
{
    let sticky = document.createElement("div");
    sticky.classList.add("sticky") ;  //<div class="sticky"></div>

    let stickyNav= document.createElement("div");
    stickyNav.classList.add("sticky-nav") ; //<div class="sticky-nav"> </div>

    let minimize= document.createElement("div");
    minimize.classList.add("minimize");
    
    let close= document.createElement("div");
    close.classList.add("close");

    let stickyContent = document.createElement("div");
    stickyContent.classList.add("sticky-content") ;

    stickyNav.append(minimize);
    stickyNav.append(close);
     
    stickyContent.append(element);
    sticky.append(stickyNav);
    sticky.append(stickyContent) ;
     
    document.body.append(sticky) ;

    let initialX;
    let initialY;
    let isStickyHold= false ;

    stickyNav.addEventListener("mousedown",function(e){  
        initialX= e.clientX ;
        initialY = e.clientY ;
        isStickyHold=true ;
    })

    stickyNav.addEventListener("mousemove",function(e){
        if(isStickyHold)
        {
            let finalX = e.clientX ;
            let finalY = e.clientY ;

            let dx= finalX-initialX;
            let dy = finalY-initialY ;

            let {top, left} = sticky.getBoundingClientRect() ;

            sticky.style.top = top +dy +"px" ;
            sticky.style.left= left +dx+ "px" ;

            initialY=finalY;
            initialX=finalX ;
        }
    })

    stickyNav.addEventListener("mouseup",function(){
           isStickyHold=false ;
    })

    minimize.addEventListener("click",function(){
      
        stickyContent.style.display= (stickyContent.style.display=="none" ? "block" : "none") ;
    })

    close.addEventListener("click",function(e){
        sticky.remove()
    })
}