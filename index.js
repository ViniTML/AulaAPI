const express = require("express");
const app = express();



app.get("/", (req, res) => {
    res.status(200).json({
      mensagem: `Bom dia, já pode ir?`
    })
});

// 

app.listen(3026, () => {
  console.log("Vinícius, Servidor ligado");
});