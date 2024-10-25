const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Rota para exibir o formulário de login
router.get('/login', authController.getLogin);

// Rota para autenticar o login
router.post('/login', authController.postLogin);

// Rota protegida para o dashboard
router.get('/dashboard', authMiddleware.isAuthenticated, (req, res) => {
    res.render('dashboard', { userId: req.session.userId });
});

// Rota para logout
router.get('/logout', authController.logout);

module.exports = router;
