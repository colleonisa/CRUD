CREATE DATABASE sistema_autenticacao;

USE sistema_autenticacao;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Insira um usuário com senha criptografada
INSERT INTO users (username, password)
VALUES ('admin', '$2b$10$KIX3UjUqYFS6A7xEd5AOiuFPvDeL6rMt7uf8DdWR72tA9E0UnTwYm'); -- senha: admin123
