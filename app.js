const express = require('express');
const bodyParser = require('body-parser');
const Database = require('./src/adapters/database');
const chatbotRoutes = require('./src/routes/chatbotRoutes');
const algorithmRoutes = require('./src/routes/algorithmRoutes'); // Importa as rotas dos algoritmos


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

Database.connect('mongodb+srv://felzr:6v4AhkhiIKVPl0E5@cluster0.a4bntzs.mongodb.net/?retryWrites=true&w=majority');

app.use('/chatbots', chatbotRoutes);
app.use('/algorithms', algorithmRoutes);
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
