const router = require("express").Router();
const lo_part = require('lodash/partition');

const burgerMdl = require("./../models/burger");
// console.log("\t\t@controllers/burgers, burgerMdl: ");
// console.log(burgerMdl && Object.keys(burgerMdl));

router.get("/", function(req, res) {
  console.log('\t\t@ ctrl/burger router GET, @ "/"');

  burgerMdl.selectAll()
  .then( burgerResults => {
    // console.log("then results\n", burgerResults);
    [devoured, ordered] = lo_part(burgerResults, 'devoured');
    return res.render("index", { ordered, devoured });
  })
  .catch( (error) => {
    console.log("ctrl/burgers/get@\"/\"/selectAll ERROR:\n", error);
    return res.render("index"); // still render
  });
});

router.post("/api/", function(req, res) {
  console.log('\t\t@ctrl/burger router POST, @ "/api"');
  burgerMdl.insertOne();
  return res.status(200).end();
});

router.put("/api/put", function(req, res) {
  console.log('\t\t@ctrl/burger router PUT, @ "/api/put"');
  burgerMdl.updateOne();
  return res.status(200).end();
});

module.exports = { router };