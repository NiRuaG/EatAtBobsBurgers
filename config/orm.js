const { connection: db } = require("./connection.js");

db.connect( (error) => {
  if (error) {
    return console.log(`Connection error: ${error.code || "(no code)"}: ${error.sqlMessage || "(no SQL message)"}`);
  }
  console.log("Connected to db as id " + db.threadId);
});

module.exports = {
  selectAll({table, from, columns, select='*'}={}) {
    from = table || from;
    
    if (!from) {
      throw "ORM/selectAll needs a 'table' (or 'from') required."
    }

    select = columns || select;
    console.log("\t\t@ orm-selectAll:", from, select);
    
    return db.promise().query({
      sql: "SELECT ?? FROM ??",
      values: [select, from]
    });
  },

  async insertOne() {
    return console.log("orm-insertOne");
  },

  async updateOne() {
    return console.log("orm-updateOne");
  }
};
