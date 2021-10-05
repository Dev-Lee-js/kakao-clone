"use strict";

// 모듈
const express = require("express");
const app = express();
const http = require('http');
const bodyParser = require("body-parser");
const server = http.createServer(app);
const socketIO = require('socket.io');
const dotenv = require("dotenv");
const moment = require("moment")
const io = socketIO(server);
const PORT = process.env.PORT || 8080;
dotenv.config();



// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.




server.listen(PORT, () => {
  console.log(`${PORT} 포트에서 서버가 가동되었습니다.`);
});


io.on("connection",(socket)=>{
    socket.on("chatting",(data)=>{
        const {name, msg}  = data;
         io.emit("chatting", {
             name:name,
             msg:msg,
             time:moment(new Date()).format("h:ss A")
         })
         
    })
  })


  
module.exports = app;