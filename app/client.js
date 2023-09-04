const express = require('express');
const app = express();
const server = http.createServer(app);

app.get("/", (req,res)=>{

    res.send("<h1> Prototype working fine </h1>")
})

server.listen(3000, ()=>{
    console.log("listening to port 3000")
})