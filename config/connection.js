const { mysql: {user, pw: password} } = require("./../keys");

exports.connection = 
    require("mysql2")
    .createConnection({
        host     : "localhost",
        user, password,
        database : "burgers_db"
    });