const express = require("express");
// const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

// #region Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars",
  require("express-handlebars")({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// #endregion Middleware


// #region Routes
const { router: burgerRoutes } = require("./controllers/burgers_controller");
// console.log("@server, router: ");
// console.log(burgerRoutes);
// console.log(Object.keys(burgerRoutes));
app.use(burgerRoutes);
// #endregion Routes

app.listen(PORT, () => {
  // console.log(`App listening on http://localhost:${PORT}`);
});
