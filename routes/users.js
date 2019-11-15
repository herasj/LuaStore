var express = require('express');
var router = express.Router();
const controller = require('../controllers/user.controller');
/* GET users listing. */
router.get('/', function(req, res, next) {
  let data = {
    email: req.query.email
  }
  controller.research(data,res);
});

router.post('/', function(req, res, next) {
  controller.create(req.body,res);
  res.send(req.body);
});

module.exports = router;
