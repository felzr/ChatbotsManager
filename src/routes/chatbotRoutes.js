const express = require('express');
const router = express.Router();
const ChatbotController = require('../controllers/chatbotController');

router.get('/', ChatbotController.getAllChatbots);
router.post('/', ChatbotController.createChatbot);
router.put('/:id', ChatbotController.updateChatbot);
router.delete('/:id', ChatbotController.deleteChatbot);

module.exports = router;
