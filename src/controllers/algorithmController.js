const MachineLearningAlgorithms = require('../enums/machineLearningAlgorithms'); // Importa o enum simulado

class AlgorithmController {
    static listAlgorithms(req, res) {
        const algorithms = Object.values(MachineLearningAlgorithms);
        res.json(algorithms);
    }
}

module.exports = AlgorithmController;