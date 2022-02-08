//express
const express = require("express");
const app = express();
const port = 3000;

//EJS template
app.set('view engine', 'ejs');
app.set("views", "./views");
const expressLayouts = require('express-ejs-layouts');
app.set('layout', './layouts/client')
app.use(expressLayouts);

// STATIC FILE
app.use(express.static('public'));

//COOKIE
const cookieParser = require('cookie-parser');
app.use(cookieParser());


//BODY-PARSER
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
const routes = require("./routes/index");
routes(app);

app.listen(port, console.log("Connect!"));