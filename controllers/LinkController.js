const Links = require("../models/LinkData")

module.exports = {
    // Exibe a lista de links
    async read(request, response){
        try {
            const linkLista = await Links.find()
            return response.json(linkLista)
        } catch (error) {
            return response.status(404).json({error: "Nenhum registro foi encontrado!"})
        }

    },

    // Cria um novo item
    async create(request, response) {
        const {title, descricao, mes} = request.body
        try {
            if(!title || !descricao || !mes){
                return response.status(400).json({error: "Campo Não Preenchido!"})
            }
    
            const criarLink = await Links.create({
                title,
                descricao,
                mes
            })
            
            return response.json(criarLink)
            
        } catch (error) {
            return response.status(401).json({error: "Não foi possivel criar o novo registro!"})
        }
    },

    // Deleta um item
    async delete(request, response){
        const {id} = request.params
        const deletarLink = await Links.findByIdAndDelete({_id: id})

        try {
            if (deletarLink){
                return response.json(deletarLink)
            }

        } catch (error) {
            return response.status(401).json({error: "Não foi encontrado Registro para ser deletado!"})
        }
    },

    //Altera um item
    async update(request,response){
        const {id} = request.params
        const {title, descricao, mes} = request.body

        try {
            if(!title || !descricao || !mes){
                return response.status(400).json({error: "Campo Não Preenchido!"})
            }

            const linkAtualizado = await Links.findByIdAndUpdate(id, {title,descricao,mes}, {new: true})

            if(!linkAtualizado){
                return response.status(404).json({error: "Registro não encontrado!"})
            }

            return response.json(linkAtualizado)
            
        } catch (error) {
            return response.status(500).json({error: "Erro ao fazer do servidor ao atualizar o registro"})
        }
    }
}