const dataBase = require("../database/database.json");


const MenuModel = {
  findAll:()=>{

    const menu = dataBase.menu;
    return menu;

  }
}


module.exports = MenuModel;