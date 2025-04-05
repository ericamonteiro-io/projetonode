const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.post("/cadastro", usuarioController.cadastrarUsuario);
router.get("/usuarios", usuarioController.listarUsuarios);

module.exports = router;
