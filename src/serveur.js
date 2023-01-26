const express = require('express')
const config = require('./config.js')

const port_http = config.port_http
const base = config.base
const persos = require('./data/persos.json')

var app = express();

app.use("/", express.static(base + "/site", { index: 'index.html' }))
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true }))

var server = app.listen(port_http, function () {
    console.log('Express server listening on port ' + port_http)
});

app.get("/get", function (req, res) {
    console.log("get")
    res.send({ list_perso: persos })
})

app.get("/get/:nom", function (req, res) {
    let resPerso = null
    console.log("getNom")
    persos.map(perso => {
        if (perso.nom == req.params.nom) {
            resPerso = perso
        }
    })
    res.send({ perso :resPerso })
})
