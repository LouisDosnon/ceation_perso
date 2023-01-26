const fs = require('fs')

const base = "D:/louis/Documents/jdr/node_perso/src/serveur.js"
const port_http = 3000

if (!fs.existsSync(base)) {
    console.log("Erreur chargement config.js")
    console.log("Le dossier "+base+" n'existe pas")
    console.log("Modifier la variable base")
    process.exit(0)
}

module.exports = {
    base : base,
    port_http : port_http,
}