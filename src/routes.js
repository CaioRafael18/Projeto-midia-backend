const express = require("express")
const routes = express.Router()
const LinkController = require("../controllers/LinkController");
const MesController = require("../controllers/MesController")

// Link
routes.get("/links", LinkController.read)
routes.post("/links", LinkController.create)
routes.delete("/links/:id", LinkController.delete)

// Mes
routes.get("/mes", MesController.read)



module.exports = routes