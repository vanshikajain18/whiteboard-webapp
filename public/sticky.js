{/* <div class="sticky">
    <div class="sticky-nav">
        <div class="minimize"></div>
        <div class="close"></div>
    </div>
    <div class="sticky-content">
        <textarea name="stickyText" id="sticky-text" cols="30" rows="10"></textarea>
    </div>
</div> */}

let stickyIcon= document.querySelector("#sticky");

stickyIcon.addEventListener("click",function(){

    let textarea= document.createElement("textarea") ;
    textarea.setAttribute("id","sticky-text") ;

    createSticky(textarea) ;

})

let imageInput= document.querySelector("#image-upload");
let image= document.querySelector("#photo");

image.addEventListener("click",function(){
    imageInput.click() ;
})

imageInput.addEventListener("change",function(e){
   let fileObject= e.target.files[0] ;

   let url= URL.createObjectURL(fileObject);

   let img= document.createElement("img") ;
   img.setAttribute("src",url) ;

   createSticky(img);

})

let download=document.querySelector("#download");

download.addEventListener("click", function(){

    let aTag = document.createElement("a");
    aTag.download = "canvas.png";
    aTag.href= canvas.toDataURL("image/png");
    aTag.click() ;
    ctx.lineCap = "round";
ctx.lineJoin = "round";
})
