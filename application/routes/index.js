var express = require('express');
var router = express.Router();




/* GET home page. */
//localhost:300/users/
router.get('/', function(req, res, next) {
  res.render('index',{title:"Home",css :["index.css"],js:["index.js"]});
});

router.get("/login",function(re,res,next){
  res.render('login',{title:"Login",css :["login.css"]});
});

router.get("/registration",function(re,res,next){
    res.render('registration',{title:"Registration",css :["registration.css"]/*, js:["registration.js"]*/})
});

router.get("/postvideo",function(re,res,next){
  res.render('postvideo',{title:"PostVideo",css :["postVideo.css"]});
});

router.get("/viewpost/",function(re,res,next){
  res.render('viewpost',{title:"Viewpost",css :["viewpost.css"]});
});


module.exports = router;
