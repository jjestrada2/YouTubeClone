var express = require('express');
var router = express.Router();




/* GET home page. */
//localhost:300/users/
router.get('/', function(req, res, next) {
  res.render('index',{title:'CSC 317 APP', name: "Juan Jose Estrada"});
});

router.get("/login",function(re,res,next){
    res.removeHeader('login');
});

module.exports = router;
