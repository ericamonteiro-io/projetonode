const db = require("../config/database");

const Usuario = {
  create: (nome, email, callback) => {
    const query = "INSERT INTO usuarios (nome, email) VALUES (?, ?)";
    db.query(query, [nome, email], (err, result) => {
      if (err) return callback(err);
      callback(null, { id: result.insertId, nome, email });
    });
  },
  findAll: (callback) => {
    const query = "SELECT * FROM usuarios";
    db.query(query, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },
};

module.exports = Usuario;
