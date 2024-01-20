const express = require("express")
const routes = require("./routes")
const cors = require("cors")
const dbConfig = require("../config/dbConfig")
dbConfig()

const app = express()
// Permitir acessar por outra porta/endereço
app.use(cors())
// Transforma os dados recebidos em Json
app.use(express.json()) 
// Chamando rotas no index para ficar disponível em toda aplicação
app.use(routes)

// Conexão web
app.listen(3333, function(){
    console.log("Servidor Online");
})

