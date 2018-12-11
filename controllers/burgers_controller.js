const router = require("express").Router();
const lo_part = require('lodash/partition');

const burgerMdl = require("./../models/burger");
// console.log("\t\t@controllers/burgers, burgerMdl: ");
// console.log(burgerMdl && Object.keys(burgerMdl));

router.get("/", function(req, res) {
  console.log('\t\t@ ctrl/burger router GET, @ "/"');

  burgerMdl.selectAll()
  .then( selectAllResults => {
    // console.log("selectAll.then results\n", selectAllResults);
    [devoured, ordered] = lo_part(selectAllResults, 'devoured');
    return res.render("index", { ordered, devoured });
  })
  .catch( error => {
    console.log("ctrl/burgers/get@\"/\"/selectAll ERROR:\n", error);
    return res.render("index"); // still render
  });
});

router.post("/api/order", function(req, res) {
  console.log("\t\t@ctrl/burger router POST, @ '/api/order'");
  burgerMdl.insertOne()
  .then( insertResults => {
    console.log("insertResults.then results\n", insertResults);
    return res.status(200).end();
  })
  .catch( error => {
    return res.status(500).end();
  });
});

router.put("/api/order", function(req, res) {
  console.log('\t\t@ctrl/burger router PUT, @ "/api/order"');
  // burgerMdl.updateOne();
  return res.status(200).end();
});

module.exports = { router };