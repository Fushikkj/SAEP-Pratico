console.log('SERVER INICIADO');

const express = require('express');
const cors = require('cors');
const pool = require('./src/config/db');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API CoffeeHouse funcionando!');
});

app.get('/produtos', async (req, res) => {
  try {
    const resultado = await pool.query(
      'SELECT * FROM produtos'
    );

    res.json(resultado.rows);
  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      mensagem: 'Erro ao buscar produtos'
    });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});