const path = require('path');
const express = require('express');
const app = express();
const methodOverride = require("method-override")
// Middlewares
var logMiddleware = require("./middlewares/logMiddleware");

// Public access
app.use(express.static(path.resolve(__dirname, "../public")));

// Server start
app.listen(3030,()=> console.log("Server Start in http://localhost:3030"));

// View engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname,"./views"));

// Data config
app.use(express.urlencoded({extended:false})); // Not fund req.body
app.use(methodOverride("_method")); // ?_method=PUT

// Rutas
const rutasMain = require ("./routes/main");
app.use ("/", rutasMain);

const rutasTienda = require ("./routes/tienda");
app.use ("/tienda", rutasTienda);

const rutasUser = require ("./routes/user");
app.use ("/", rutasUser);

app.get("/carrito",(req,res)=>res.render(path.resolve(__dirname,"../views", "carrito.ejs")))

// Middlewares
app.use(logMiddleware);

//pagina 404
app.get("*", (req, res) => {res.render("notFound")});