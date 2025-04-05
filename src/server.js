require("dotenv").config();
const express = require("express");
const usuarioRoutes = require("./routes/usuarioRoutes");

const app = express();
app.use(express.json());

// Configura as rotas
app.use("/api", usuarioRoutes);

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
