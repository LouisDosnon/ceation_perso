const express = require('express')
const config = require('./config.js')
const cors = require('cors')

const port_http = config.port_http
const persos = require('./data/persos.json')

var app = express();

app.use(cors({origin:'*'}));

//app.use("/")
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true }))

var server = app.listen(port_http, function () {
    console.log('Express server listening on port ' + port_http)
});

app.get("/", function (req, res) {
    console.log("get")
    res.send(persos)
})

app.get("/get/:nom", function (req, res) {
    let resPerso = null
    console.log("getNom")
    persos.map(perso => {
        if (perso.nom == req.params.nom) {
            resPerso = perso
        }
    })
    res.send(resPerso)
})
