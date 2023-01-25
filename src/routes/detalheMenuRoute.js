const express = require("express");
const router = express.Router()
const DetalheMenuController = require("../controllers/DetalheMenuController");


router.get("/detalhe/:id", DetalheMenuController.showDetalheMenuPage);


module.exports = router;