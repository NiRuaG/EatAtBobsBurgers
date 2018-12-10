const { connection: dbConn } = require("./connection.js");

dbConn.connect( (error) => {
  if (error) {
    return console.log(`Connection error: ${error.code || "(no code)"}: ${error.sqlMessage || "(no SQL message)"}`);
  }
});

module.exports = {
  selectAll() {
    return console.log("orm-selectAll");
  },
  insertOne() {
    return console.log("orm-insertOne");
  },
  updateOne() {
    return console.log("orm-updateOne");
  }
};
