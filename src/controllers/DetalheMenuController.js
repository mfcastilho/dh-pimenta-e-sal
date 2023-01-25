const MenuModel = require("../models/MenuModel");


const DetalheMenuController = {
  showDetalheMenuPage:(req, res)=>{
    const menu = MenuModel.findAll();
    const menuMapeado = [];

    const {id} = req.params;
    const cardapio = menu.find(cardapio=>cardapio.id == id);

    const cardapioMapeado = {
      id: cardapio.id,
      name: cardapio.name,
      description: cardapio.description,
      price: `U$S ${cardapio.price.toLocaleString("pt-BR",{currency:"BRL", minimumFractionDigits:2})}`,
      image:cardapio.image
    }

    res.render("detalheMenu", {cardapio:cardapioMapeado});
  }
}

module.exports = DetalheMenuController;