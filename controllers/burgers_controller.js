const router = require("express").Router();

const burgerMdl = require("./../models/burger");
// console.log("\t\t@controllers/burgers, burgerMdl: ");
// console.log(burgerMdl && Object.keys(burgerMdl));

router.get("/", function(req, res) {
  console.log('\t\t@ctrl/burger router GET, @ "/"');
  burgerMdl.selectAll();
  return res.render("index");
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