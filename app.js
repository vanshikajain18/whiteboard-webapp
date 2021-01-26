//for backend 

const express = require("express") ;
const app= express() ;
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static("public")) ;

io.on('connection', function(socket){
    console.log(socket.id + " connected !! ");

    socket.on("md",function(pointObject){
     
      socket.broadcast.emit("mousedown", pointObject) ;
    })

    socket.on("mm",function(pointObject){
      socket.broadcast.emit("mousemove", pointObject) ;
        
    })
    
    socket.on("mu",function(){
      socket.broadcast.emit("mouseup") ;
        
    })

    socket.on("disconnect" , function(){
      console.log("socket disconnected !!");
  })

}) 

http.listen(3000, function(){
  console.log('listening on *:3000');
}) 

