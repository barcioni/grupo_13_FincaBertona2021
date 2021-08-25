const path = require('path');
const express = require('express');
const app = express();
const methodOverride = require("method-override");
const session = require("express-session"); //Session
const cookies = require ("cookie-parser"); //Cookies
const userLoggedMiddleware = require ("./middlewares/userLoggedMiddleware")


// Server start
app.listen(3030,()=> console.log("Server Start in http://localhost:3030"));

// View engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname,"./views"));

// Middlewares
app.use(session({secret: "Secret", resave: false, saveUninitialized: false,})); // add req.session
app.use (cookies ());
app.use(express.urlencoded({extended:false})); // Not fund req.body
app.use(methodOverride("_method")); // ?_method=PUT
app.use(express.json());
app.use(userLoggedMiddleware);

// Public access
app.use(express.static(path.resolve(__dirname, "../public")));


// Rutas
const rutasMain = require ("./routes/main");
app.use ("/", rutasMain);

const rutasTienda = require ("./routes/tienda");
app.use ("/tienda", rutasTienda);

const rutasUser = require ("./routes/user");
app.use ("/", rutasUser);

app.get("/carrito",(req,res)=>res.render(path.resolve(__dirname,"../views", "carrito.ejs")))


//pagina 404
app.get("*", (req, res) => {res.render("notFound")});