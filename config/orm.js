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
      throw "ORM.selectAll requires a 'table' (or 'from') property."
    }

    select = columns || select;
    
    console.log("\t\t@ orm.selectAll:", from, select, '\n');
    
    return db.promise().query({
      sql: "SELECT ?? FROM ??",
      values: [select, from]
    });
  },

  insertOne({table, into, ...set}={}) {

    into = table || into;
    if (!into) {
      throw "ORM.insertOne requires a 'table' (or 'into') property.";
    }
    
    set = Object.values(set)[0]; // [0] because it should only be one object passed
    if (!set) {
      throw "ORM.insertOne requires a passed in object for its set 'values'.";
    }

    console.log("\t\t@ orm.insertOne:", into, set, '\n');

    return db.promise().query({
      sql: "INSERT INTO ?? SET ?", //! this specific to a mysql syntax, otherwise will have to do INSERT INTO .. VALUES ..
      values: [into, set]
    });
  },

  updateOne() {
    return console.log("@ orm.updateOne\n");
  }
};
