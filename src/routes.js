const express = require("express")
const routes = express.Router()
const LinkController = require("../controllers/LinkController");

// Link
routes.get("/links", LinkController.read)
routes.post("/links", LinkController.create)
routes.delete("/links/:id", LinkController.delete)
routes.put("/links/:id", LinkController.update)

module.exports = routes