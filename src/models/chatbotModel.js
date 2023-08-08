const mongoose = require('mongoose');

const ChatbotSchema = new mongoose.Schema({
    nome: String,
    cliente: String,
    dataCriacao: Date,
    tipoAlgoritmo: String
});

const Chatbot = mongoose.model('Chatbot', ChatbotSchema);

module.exports = Chatbot;