
//===IMPORTAÇÕES===
const express = require("express");
const path = require("path");




//===VARIÁVEIS===
const app = express();
const port = 5000




//===MIDDLEWARES===
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.resolve("src", "public")));



//===ROTAS===





app.listen(port, ()=>{
  console.log(`O servidor está rodando na porta: ${port}`);
});
