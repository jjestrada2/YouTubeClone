var express = require('express');
const { isLoggedIn } = require('../middleware/auth');
var router = express.Router();




/* GET home page. */
//localhost:300/users/
router.get('/', function(req, res, next) {
  res.render('index',{title:"Home",css :["index.css"],js:["index.js"]});
});

router.get("/login",function(req,res,next){
  res.render('login',{title:"Login",css :["login.css"]});
});

router.get("/registration",function(req,res,next){
    res.render('registration',{title:"Registration",css :["registration.css"], /*js:["registration.js"]*/})
});


router.get("/postvideo",isLoggedIn,function(req,res,next){
  res.render('postvideo',{title:"PostVideo",css :["postVideo.css"]});
});

router.get("/viewpost/",function(req,res,next){
  res.render('viewpost',{title:"Viewpost",css :["viewpost.css"]});
});


module.exports = router;
