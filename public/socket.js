// code that will run  on  the receiving client side 

let myPenSize ;
let myPenColor ;

socket.on("mousedown", function(pointObject) {
myPenSize= ctx.lineWidth ;
myPenColor= ctx.strokeStyle ;
ctx.strokeStyle= pointObject.strokeStyle ;
ctx.lineWidth = pointObject.lineWidth ;
ctx.beginPath() ;
ctx.moveTo(pointObject.x ,pointObject.y) ;
console.log(pointObject) ;
})

socket.on("mousemove", function(pointObject) {
ctx.lineTo(pointObject.x,pointObject.y);
ctx.stroke() ;
})

socket.on("mouseup", function() {
ctx.lineWidth=myPenSize;
ctx.strokeStyle= myPenColor ;
})

