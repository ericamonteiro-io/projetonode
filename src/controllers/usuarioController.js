const Usuario = require("../models/usuarioModel");

const usuarioController = {
  cadastrarUsuario: (req, res) => {
    const { nome, email } = req.body;
    if (!nome || !email) {
      return res.status(400).json({ error: "Nome e email são obrigatórios" });
    }

    Usuario.create(nome, email, (err, usuario) => {
      if (err) {
        console.error("Erro ao cadastrar:", err);
        return res.status(500).json({ error: "Erro ao cadastrar usuário" });
      }
      res.status(201).json(usuario);
    });
  },
  listarUsuarios: (req, res) => {
    Usuario.findAll((err, usuarios) => {
      if (err) {
        console.error("Erro ao listar:", err);
        return res.status(500).json({ error: "Erro ao listar usuários" });
      }
      res.json(usuarios);
    });
  },
};

module.exports = usuarioController;
