if (process.env.JAWSDB_URL) {
    exports.connection = 
        require("mysql2")
            .createConnection(process.env.JAWSDB_URL);
}
else {
    const { mysql: { user, pw: password } } = require("./../keys");

    exports.connection =
        require("mysql2")
            .createConnection({
                host: "localhost",
                user, password,
                database: "burgers_db"
            });
}

