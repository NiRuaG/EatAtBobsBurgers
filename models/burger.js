const orm = require("./../config/orm");
// console.log("\t\t@ models/burger, orm:");
// console.log(orm && Object.keys(orm));

const burgerModel = {
  // console.log("\t\t@ model/burger.selectAll");
  all: () => 
    orm
      .selectAll({ table: "burgers" })
        .then( queryResults => queryResults[0] )
  ,

  orderOne: burger => {
    if (!burger) {
      throw "Burger Model/orderOne requires a passed in 'burger' object.";
    }

    // console.log("\t\t@ model/burger.orderOne w/burger:", burger);
    
    return orm
      .insertOne({ into: "burgers", burger });
  },

  updateOne: burger => {
    if (!burger) {
      throw "Burger Model.updateOne requires a passed in 'burger' object.";
    }

    // console.log("\t\t@ model/burger.updateOne w/burger:", burger);

    return orm
      .updateOne({
        table: "burgers",
        where: { id: burger.id },
        burger
      });
  }
};

module.exports = burgerModel;