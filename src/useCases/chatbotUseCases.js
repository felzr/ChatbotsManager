const Chatbot = require('../models/chatbotModel');

class ChatbotUseCases {
    static async createChatbot(chatbotData) {
        return await Chatbot.create(chatbotData);
    }

    static async getAllChatbots() {
        return await Chatbot.find({});
    }

    static async updateChatbot(id, newData) {
        return await Chatbot.findByIdAndUpdate(id, newData, { new: true });
    }

    static async deleteChatbot(id) {
        await Chatbot.findByIdAndRemove(id);
    }
}

module.exports = ChatbotUseCases;