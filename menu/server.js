const express = require("express")
const handlebars = require("express-handlebars")

const path = require('path');

const app = express()

// setting up handlebars for use
const hbs = handlebars.create({})

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")))

app.get("/menu", (req, res) => {
   res.render('menu')
})

app.get("/reservations", (req, res) => {
    res.render('reservation')
 })

app.listen(3001, () => {
    console.log("now listening")
})

