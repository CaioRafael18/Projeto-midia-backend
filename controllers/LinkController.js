const Links = require("../models/LinkData")

module.exports = {
    // Exibe a lista de links
    async read(request, response){
        const linkLista = await Links.find()
        return response.json(linkLista)
    },

    // Cria um novo item
    async create(request, response) {
        const {title, descricao, mes} = request.body

        if(!title || !descricao || !mes){
            return response.status(400).json({error: "Campo Não Preenchido!"})
        }

        const criarLink = await Links.create({
            title,
            descricao,
            mes
        })
        
        return response.json(criarLink)
    },

    async delete(request, response){
        const {id} = request.params
        const deletarLink = await Links.findByIdAndDelete({_id: id})

        if (deletarLink){
            return response.json(deletarLink)
        }

        return response.status(401).json({error: "Não foi encontrado Registro para ser deletado!"})
    }
}