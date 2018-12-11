const { connection: db } = require("./connection.js");

db.connect( (error) => {
  if (error) {
    return console.log("Database connection error:\n", error);
  }
  console.log(`Connected to database as id ${db.threadId}`);
});

module.exports = {
  selectAll({table, from, columns, select='*'}={}) {
    from = table || from;
    
    if (!from) {
      throw "ORM/selectAll requires a 'table' (or 'from') property."
    }

    select = columns || select;
    console.log("\t\t@ orm-selectAll:", from, select);
    
    return db.promise().query({
      sql: "SELECT ?? FROM ??",
      values: [select, from]
    });
  },

  insertOne() {
    return console.log("orm-insertOne");
  },

  updateOne() {
    return console.log("orm-updateOne");
  }
};
