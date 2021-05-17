const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.resolve(__dirname, "./public")));
app.listen(3000,()=> console.log("Server Start in http://localhost:3000"))

app.get("/",(req,res)=>res.sendFile(path.join(__dirname,"views", "index.html")))