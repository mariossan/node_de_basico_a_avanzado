const express   = require('express')
const app       = express()
const port      = 8080
const hbs       = require("hbs")

require('./hbs/helpers')

app.use( express.static( __dirname +  "/public") )
hbs.registerPartials( __dirname + "/views/partials" )
app.set( "view engine", "hbs" )


app.get("/", (req, res) => {

    res.render("home", {
        fullName: "Mario Guadalupe Sánchez Silva"
    });
})

app.get("/about", (req, res) => {

    res.render("about");
})


app.listen(port, () => console.log(`Escuchando en el puerto ${ port }`))