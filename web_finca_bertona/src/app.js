const path = require('path');
const express = require('express');
const app = express();

// Public access
app.use(express.static(path.resolve(__dirname, "./public")));
// Server start
app.listen(3030,()=> console.log("Server Start in http://localhost:3030"))
// View engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname,"../views"))

// Routes
app.get("/",(req,res)=>res.sendFile(path.join(__dirname,"views", "index.ejs")))

app.get("/contacto",(req,res)=>res.sendFile(path.join(__dirname,"views", "contacto.ejs")))

app.get("/login",(req,res)=>res.sendFile(path.join(__dirname,"views", "login.ejs")))

app.get("/nuestraFamilia",(req,res)=>res.sendFile(path.join(__dirname,"views", "nuestraFamilia.ejs")))

app.get("/tienda",(req,res)=>res.sendFile(path.join(__dirname,"views", "tienda.ejs")))

app.get("/vinos",(req,res)=>res.sendFile(path.join(__dirname,"views", "vinos.ejs")))

app.get("/registro",(req,res)=>res.sendFile(path.join(__dirname,"views", "registro.ejs")))

app.get("/carrito",(req,res)=>res.sendFile(path.join(__dirname,"views", "carrito.ejs")))