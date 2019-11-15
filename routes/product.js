var express = require('express');
var router = express.Router();
const controller = require('../controllers/product.controller');
/* GET users listing. */
router.get('/name', function(req, res, next) {    
    let data={
        name:req.query.name,
        res:res
    };
    controller.getbyName(data);
});

router.get('/id', function(req, res, next) {
    let data={
        id:parseInt(req.query.id),
        res:res
    };
    controller.getbyID(data);
});

router.get('/', function(req, res, next) {
    let data={
        name:parseInt(req.query.name),
        res:res
    };
    controller.research(data);
});

router.get('/new', function(req, res, next) {
    controller.new(res);
});
module.exports = router;
