const orm = require("./../config/orm");
// console.log("\t\t@ models/burger, orm:");
// console.log(orm && Object.keys(orm));

const burgerModel = {
  orderOne(burger) {
    if (!burger) {
      throw "Burger Model/orderOne requires a passed in 'burger' object.";
    }

    console.log("\t\t@ model/burger.orderOne");
    
    return orm
      .insertOne({into: "burgers", burger});
  },
  
  all() {
    console.log("\t\t@ model/burger/selectAll");

    return orm
      .selectAll({table: "burgers"})
        .then( queryResults => queryResults[0] );
  },

  updateOne() {
    console.log("\t\t@ model/burger/updateOne");
    return orm.updateOne();
  }
};

module.exports = burgerModel;