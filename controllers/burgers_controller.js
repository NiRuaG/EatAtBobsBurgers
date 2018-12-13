const router = require("express").Router();
const lo_part = require('lodash/partition');

const burgerMdl = require("./../models/burger");
// console.log("\t\t@controllers/burgers, burgerMdl: ");
// console.log(burgerMdl && Object.keys(burgerMdl));

router.get('/', function(req, res) {
  // console.log('\t\t@ ctrl/burger GET on /');

  burgerMdl.all()
    .then( selectAllResults => {
      // console.log("selectAll.then results\n", selectAllResults);
      [devoured, ordered] = lo_part(selectAllResults, 'devoured');
      return res.render("index", { ordered, devoured });
    })
    .catch( error => {
      console.log("ctrl/burgers GET on /, all() ERROR:\n", error);
      return res.render("index"); // still render
    });
});


router.post('/api/order', function({body}={}, res) {
  // console.log('\t\t@ ctrl/burger POST on /api/order\n\t\t\tw/body:', body);
  if (!body) {
    return res.status(500).end();
  }

  burgerMdl.orderOne(body)
    .then( _ => res.status(200).end() )
    .catch( error => {
      console.log("ctrl/burgers POST on /api/order, orderOne() ERROR:\n", error);
      return res.status(500).end();
    });
});


router.put("/api/devour/:id", function({params: {id}}={}, res) {
  // console.log('\t\t@ ctrl/burger PUT on /api/devour\n\t\t\tw/id:', id);
  burgerMdl.updateOne({
    id,
    devoured: true
  })
  .then( _ => res.status(200).end() )
  .catch( error => {
    console.log("ctrl/burgers PUT on /api/devour/:id, updateOne() ERROR:\n", error);
      return res.status(500).end();
  });
});


module.exports = { router };