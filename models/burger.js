const orm = require("./../config/orm");
// console.log("\t\t@ models/burger, orm:");
// console.log(orm && Object.keys(orm));

const burgerModel = {
  insertOne() {
    console.log("\t\t@ model/burger/insertOne");
    return orm.insertOne();
  },
  
  selectAll() {
    console.log("\t\t@ model/burger/selectAll");

    return orm.selectAll({table: "burgers"})
    .then( queryResults => queryResults[0]);
  },

  updateOne() {
    console.log("\t\t@ model/burger/updateOne");
    return orm.updateOne();
  }
};

module.exports = burgerModel;