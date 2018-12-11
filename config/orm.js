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
    
    console.log("\t\t@ orm.selectAll:", from, select);
    
    return db.promise().query({
      sql: "SELECT ?? FROM ??",
      values: [select, from]
    });
  },

  insertOne({table, into, ...values}={}) {

    into = table || into;
    if (!into) {
      throw "ORM.insertOne requires a 'table' (or 'into') property.";
    }
    
    values = Object.values(values)[0];
    if (!values) {
      throw "ORM.insertOne requires a passed in object for its 'values'.";
    }

    console.log("\t\t@ orm.insertOne:", into, values);

    return db.promise().query({
      
    })
    return new Promise( (res,rej) => res(123));
  },

  updateOne() {
    return console.log("orm-updateOne");
  }
};
