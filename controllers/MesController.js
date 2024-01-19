const Links = require("../models/LinkData")

module.exports = {
    // Exibir apenas o resultado da consulta
    async read(request, response){
        const consultaMes = request.query;
        const Mes = await Links.find(consultaMes)

        return response.json(Mes)
    }
}