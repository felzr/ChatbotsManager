const express = require('express');
const router = express.Router();
const AlgorithmController = require('../controllers/algorithmController');

router.get('/all', AlgorithmController.listAlgorithms);

module.exports = router;