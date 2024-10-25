// Middleware para proteger rotas
exports.isAuthenticated = (req, res, next) => {
    if (req.session.userId) {
        return next(); // Usuário autenticado
    }
    res.redirect('/login');
};
