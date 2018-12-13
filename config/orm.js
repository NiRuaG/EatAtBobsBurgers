const { connection: db } = require("./connection.js");

db.connect( (error) => {
  if (error) {
    return console.log("Database connection error:\n", error);
  }
  // console.log(`Connected to database as id ${db.threadId}`);
});

module.exports = {
  selectAll({table, from, columns, select='*'}={}) {

    from = table || from;
    if (!from) {
      throw "ORM.selectAll requires a 'table' (or 'from') property."
    }

    select = columns || select;
    
    // console.log("\t\t@ orm.selectAll:", from, select, '\n');
    
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
    
    set = Object.values(set)[0]; // [0] because it should only be the one object passed to INSERT
    if (!set) {
      throw "ORM.updateOne requires a passed in object for its 'set' values (use either an explicit 'set' property, or any property that does not match the other expected properties: 'table' or 'into').";
    }

    // console.log("\t\t@ orm.insertOne:", into, set, '\n');

    return db.promise().query({
      sql: "INSERT INTO ?? SET ?", //! this syntax is specific to mysql (not part of the general SQL spec).  Would otherwise have to do 'INSERT INTO .. VALUES ..'
      values: [into, set]
    });
  },

  updateOne({table, update, where, ...set}={}) {

    update = update || table;
    if (!table) {
      throw "ORM.updateOne requires a 'table' (or 'update') property.";
    }

    if (!where) {
      throw "ORM.updateOne requires a 'where' property.";
    }

    set = Object.values(set)[0]; // [0] because it should only be the one object passed to UPDATE
    if (!set) {
      throw "ORM.updateOne requires a passed in object for its 'set' values (use either an explicit 'set' property, or any property that does not match the other expected properties: 'table', 'update', or 'where').";
    }

    // console.log("\t\t@ orm.updateOne:", update, set, where, '\n');

    return db.promise().query({
      sql: "UPDATE ?? SET ? WHERE ?",
      values: [update, set, where]
    });
  }
};
