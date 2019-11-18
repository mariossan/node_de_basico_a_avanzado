require('./config/config')

const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


// respond with "hello world" when a GET request is made to the homepage
app.get('/usuario', function(req, res) {
  res.json('get Usuario');
});

app.post('/usuario', function(req, res) {
    let body = req.body
    res.json({persona: body});
});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id
    res.json(['PUT Usuario', id])
});

app.delete('/usuario', function(req, res) {
    res.json('DELETE Usuario');
});


app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`)
})