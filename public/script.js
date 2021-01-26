let canvas= document.querySelector("#canvas") ;
let ctx = canvas.getContext("2d") ;
let db=[] ;
let redoDB =[] ;

// we get a ctx object 

// object destructuring
let {top :canvasTop} =canvas.getBoundingClientRect() ;

canvas.height= window.innerHeight -canvasTop ;
canvas.width= window.innerWidth ;
ctx.lineCap = "round";
ctx.lineJoin = "round";

window.addEventListener("resize" ,function(){
    // to adjust the canvas acc to the window size
    canvas.height= window.innerHeight -canvasTop ;
    canvas.width= window.innerWidth ;
    redrawLines() ;
})

let isMouseDown=false ;
let line=[] ;

canvas.addEventListener("mousedown",function(e){
  isMouseDown=true ;
  let x= e.clientX ;
  let y= e.clientY - canvasTop ;
  ctx.beginPath() ; //start a line
  ctx.moveTo(x,y) ;
  let pointObject={
    id :"md" ,
    x ,
    y,
    strokeStyle : ctx.strokeStyle ,
    lineWidth : ctx.lineWidth 
  } ;
  line.push(pointObject) ;
socket.emit("md",pointObject);
})


canvas.addEventListener("mousemove",function(e){
  if(isMouseDown)
  {  let x= e.clientX ;
    let y= e.clientY - canvasTop ;
    ctx.lineTo(x,y) ;
    ctx.stroke() ; //show a line 
    let pointObject={
      id :"mm" ,
      x ,
      y,
    } ;
    line.push(pointObject) ;
socket.emit("mm",pointObject);
  }
})

canvas.addEventListener("mouseup",function(e){
  isMouseDown=false ;
  db.push(line) ;
  line=[] ;
  if(redoDB.length) redoDB=[] ;
socket.emit("mu");
})