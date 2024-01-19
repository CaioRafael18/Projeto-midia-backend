const mongoose = require("mongoose")

async function main(){
    // Se conseguir fazer a conexão com o banco
    try {
        await mongoose.connect("mongodb+srv://caio_rafael:belarmino1@cluster0.1rcav8h.mongodb.net/links?retryWrites=true&w=majority")
        console.log("Conectado ao banco!");
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main