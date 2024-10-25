require('dotenv').config();
const express = require('express');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const indexRoutes = require('./routes/indexRoutes');
const userRoutes = require('./routes/userRoutes');

// Inicializa a aplicação
const app = express(); 

// Configuração do parser de corpo (body parser)
app.use(express.urlencoded({ extended: false }));

// Importa o banco de dados apenas uma vez
const db = require('./config/db');

// Configuração de sessões com armazenamento no MySQL
app.use(session({
    secret: 'chave-secreta',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore({}, db)
}));

// Configuração da pasta de visualizações e EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Usar as rotas de autenticação
app.use(authRoutes);

app.use('/', indexRoutes);
app.use('/users', userRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
