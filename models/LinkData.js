const mongoose = require("mongoose")

const LinkDataSchema = new mongoose.Schema({
    title: {
        type: String
    },
    descricao: {
        type: String
    },
    mes: {
        type: String
    }
})

module.exports = mongoose.model('Links', LinkDataSchema)