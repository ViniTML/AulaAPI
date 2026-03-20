const express = require("express");
const app = express();



app.get("/", (req, res) => {
    res.status(200).json({
      mensagem: `Teste `
    })
});

// 

app.listen(3026, () => {
  console.log("Vinícius, Servidor ligado");
});