const ChatbotUseCases = require('../useCases/chatbotUseCases');

class ChatbotController {
    static async getAllChatbots(req, res) {
        const chatbots = await ChatbotUseCases.getAllChatbots();
        res.json(chatbots);
    }

    static async createChatbot(req, res) {
        const newChatbot = await ChatbotUseCases.createChatbot(req.body);
        res.json(newChatbot);
    }

    static async updateChatbot(req, res) {
        const updatedChatbot = await ChatbotUseCases.updateChatbot(req.params.id, req.body);
        res.json(updatedChatbot);
    }

    static async deleteChatbot(req, res) {
        await ChatbotUseCases.deleteChatbot(req.params.id);
        res.json({ message: 'Chatbot removido com sucesso!' });
    }
}

module.exports = ChatbotController;
