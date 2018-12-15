const { mysql: { user, pw: password } } = require("./../keys");

exports.connection = 
    require("mysql2").createConnection(
        process.env.JAWSDB_URL || // heroku 
        {
            host: "localhost",
            user, password,
            database: "burgers_db"
        });