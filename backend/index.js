const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = 3000;


const db = new sqlite3.Database("./conversas.db");


app.use(cors());
app.use(express.json());


db.run(`
  CREATE TABLE IF NOT EXISTS mensagens (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    remetente TEXT,
    mensagem TEXT,
    data TEXT
  )
`);

app.post("/mensagem", (req, res) => {
  const { remetente, mensagem } = req.body;
  const data = new Date().toISOString();

  db.run(
    "INSERT INTO mensagens (remetente, mensagem, data) VALUES (?, ?, ?)",
    [remetente, mensagem, data],
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Erro ao salvar mensagem");
      } else {
        res.status(200).send("Mensagem salva com sucesso");
      }
    }
  );
});


app.get("/mensagens", (req, res) => {
  db.all("SELECT * FROM mensagens", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro ao buscar mensagens");
    } else {
      res.status(200).json(rows);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
