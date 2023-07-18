var express = require('express');
var router = express.Router();

router.use(function(re,res,next){
  console.log('Users middleware1-- users.js');
  next()
})

router.use(function(re,res,next){
  console.log('Users middleware2-- users.js');
  next()
})

/* GET users listing. */
/* GET home page. */
//localhost:300/users/
router.get('/', function(req, res, next) {
  res.render('respond with a source from get');
});
//localhost:300/users/
/*router.update('/', function(req, res, next) {
  res.render('respond with a source from get');
});*/
//localhost:300/users/
router.post('/', function(req, res, next) {
  res.render('respond with a source from post');
});
//localhost:300/users/
router.patch('/', function(req, res, next) {
  res.render('respond with a source from patch');
});

router.delete('/', function(req, res, next) {
  res.render('respond with a source from delete');
});
module.exports = router;
