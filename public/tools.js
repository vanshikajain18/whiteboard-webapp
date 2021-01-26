let pencil= document.querySelector("#pencil") ;
let eraser=document.querySelector("#eraser") ;
let undo=document.querySelector("#undo") ;
let redo =document.querySelector("#redo") ;
let pencilOptions = document.querySelector("#pencil-options") ;
let eraserOptions = document.querySelector("#eraser-options") ;
let pencilSizeInput= document.querySelector("#pencil-size") ;
let eraserSizeInput = document.querySelector("#eraser-size") ;
let pencilSize = 1 ;
let eraserSize = 1 ;
let pencilColor="black" ;
let pencilColors =document.querySelectorAll(".pencil-colors") ;

undo.addEventListener("click",function(){
  if(db.length){
      let line = db.pop() ;
    redoDB.push(line) ;
   //clear canvas and redraw all lines 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    redrawLines();
  }
})

redo.addEventListener("click" ,function(){
    if(redoDB.length){
        let line= redoDB.pop();
        for(let j=0;j<line.length;j++)
        {
          let pointObject=line[j] ;
          if(pointObject.id=="md")
          {  ctx.beginPath() ; //start a line
            ctx.moveTo(pointObject.x,pointObject.y) ;
            ctx.strokeStyle = pointObject.strokeStyle ;
          ctx.lineWidth = pointObject.lineWidth ;
          }
          else {
            ctx.lineTo(pointObject.x,pointObject.y) ;
            ctx.stroke() ; 
          }
        }
        db.push(line) ;
   
    }
})

function redrawLines(){
  
    for(let i=0;i<db.length;i++)
    {
      let line= db[i] ;
      for(let j=0;j<line.length;j++)
      {
        let pointObject=line[j] ;
        if(pointObject.id=="md")
        {  ctx.beginPath() ; //start a line
          ctx.moveTo(pointObject.x,pointObject.y) ;
          ctx.strokeStyle = pointObject.strokeStyle ;
          ctx.lineWidth = pointObject.lineWidth ;
        }
        else {
          ctx.lineTo(pointObject.x,pointObject.y) ;
          ctx.stroke() ; 
        }
    }
}
}


pencil.addEventListener("click",function(){

    if(pencil.classList.contains("active-tool"))     //pencil is active
    {
        if(pencilOptions.classList.contains("hide"))
        {
              pencilOptions.classList.remove("hide") ;   
        }
        else{ //pencil options visible 
             pencilOptions.classList.add("hide");
        }
    }
    else{ //eraser is active
           eraser.classList.remove("active-tool");
           pencil.classList.add("active-tool");
           eraserOptions.classList.add("hide");
         ctx.strokeStyle = pencilColor ;
         ctx.lineWidth= pencilSize ;

    }
})

eraser.addEventListener("click",function(){

    if(eraser.classList.contains("active-tool"))      //eraser is active
    {
        if(eraserOptions.classList.contains("hide"))
        {
            eraserOptions.classList.remove("hide");
        }
        else{ //eraser options visible 
            eraserOptions.classList.add("hide");
        }
    }
    else{ //pencil is active
        pencil.classList.remove("active-tool");
         eraser.classList.add("active-tool");
         pencilOptions.classList.add("hide");
         ctx.strokeStyle = "white";
         ctx.lineWidth= eraserSize ;
        }
})

pencilSizeInput.addEventListener("change" ,function(e){
  let val= e.target.value ;
  ctx.lineWidth = val ;
  pencilSize = val ;
})

eraserSizeInput.addEventListener("change" , function(e){
  let val= e.target.value ;
    ctx.lineWidth = val ;
    eraserSize= val ;
})

for(let i=0 ;i<pencilColors.length ;i++)
{  
    pencilColors[i].addEventListener("click",function(e){
        ctx.strokeStyle = e.target.className ;
         //set color 
         pencilColor = ctx.strokeStyle ;
    })
}