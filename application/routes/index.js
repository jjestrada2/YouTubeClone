var express = require('express');
const { isLoggedIn } = require('../middleware/auth');
const { getRecentPosts } = require('../middleware/posts');
var router = express.Router();
const db = require('../conf/database');




/* GET home page. */
//localhost:300/users/
router.get('/',getRecentPosts, async function(req, res, next) {
  try{
    var [results,_] = await db.execute(`select id, title,description,thumbnail, concat_ws("",title,
    description) as haystack
    FROM posts
    HAVING haystack like "%%";`);
    if(results && results.length > 0){
      res.locals.count = results.length;
      res.locals.results = results;
      return res.render('index',{title:"Home",css :["index.css"]});
      
    }else{
      //return first results of the table
      return res.status(200).json({
        message:"no results found!"
      });
    }
  }catch(err){
    next(err);
  }
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





module.exports = router;
