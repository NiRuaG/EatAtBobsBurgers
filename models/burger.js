const orm = require("./../config/orm");
// console.log("\t\t@ models/burger, orm:");
// console.log(orm && Object.keys(orm));

const burgerModel = {
  insertOne() {
    console.log("model-burger-insertOne");
    return orm.insertOne();
  },
  selectAll() {
    console.log("model-burger-selectAll");
    return orm.selectAll();
  },
  updateOne() {
    console.log("model-burger-updateOne");
    return orm.updateOne();
  }
};

module.exports = burgerModel;