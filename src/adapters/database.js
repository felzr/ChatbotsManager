const mongoose = require('mongoose');

class Database {
    static connect(url) {
        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
        db.once('open', () => {
            console.log('Conexão bem-sucedida com o MongoDB');
        });
    }
}

module.exports = Database;
