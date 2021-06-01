const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.resolve(__dirname, "./public")));
app.listen(3030,()=> console.log("Server Start in http://localhost:3030"))

app.get("/",(req,res)=>res.sendFile(path.join(__dirname,"views", "index.html")))

app.get("/contacto",(req,res)=>res.sendFile(path.join(__dirname,"views", "contacto.html")))

app.get("/login",(req,res)=>res.sendFile(path.join(__dirname,"views", "login.html")))

app.get("/nuestraFamilia",(req,res)=>res.sendFile(path.join(__dirname,"views", "nuestraFamilia.html")))

app.get("/tienda",(req,res)=>res.sendFile(path.join(__dirname,"views", "tienda.html")))

app.get("/vinos",(req,res)=>res.sendFile(path.join(__dirname,"views", "vinos.html")))

app.get("/registro",(req,res)=>res.sendFile(path.join(__dirname,"views", "registro.html")))