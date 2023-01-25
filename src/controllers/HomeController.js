const MenuModel = require("../models/MenuModel");


const HomeController = {
  showHomePage: (req, res)=>{

    const menu = MenuModel.findAll();
    const menuMapeado = [];

    menu.map(cardapio=>{
      menuMapeado.push({
        id: cardapio.name,
        description: cardapio.description,
        price: `U$S ${cardapio.price.toLocaleString("pt-BR",{currency:"BRL", minimumFractionDigits:2})}`
      });
    });

  
    res.render("index.ejs", {menu:menuMapeado});
  }
}

module.exports = HomeController;

