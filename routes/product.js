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
        name:req.query.name,
        res:res
    };
    controller.research(data);
});

router.get('/new', function(req, res, next) {
    controller.new(res);
});
router.get('/photo', function(req, res, next) {
    let data={
        name:req.query.id,
        res:res
    };
    controller.photo(data);
});

router.get('/search', function(req, res, next) {
    let data={
        name:req.query.id,
        res:res
    };
    controller.search(data);
});

router.post('/url', function(req, res, next) {
    let data={
        name:req.query.id,
        res:res
    };
    controller.changeurl(data);
});
module.exports = router;
