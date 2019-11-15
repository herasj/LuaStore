var express = require('express');
var router = express.Router();
const controller = require('../controllers/product.controller');
/* GET users listing. */
router.get('/name/:name', function(req, res, next) {    
    let data={
        name:req.params.name,
        res:res
    };
    controller.getbyName(data);
});

router.get('/id/:id', function(req, res, next) {
    let data={
        id:parseInt(req.params.id),
        res:res
    };
    controller.getbyID(data);
});
module.exports = router;
