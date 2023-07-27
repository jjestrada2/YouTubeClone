var express = require('express');
var router = express.Router();
const db = require('../conf/database');
//localhost:300/users/
router.post('/register',async function(req,res,next){
  var {username,email,password} = req.body;
  //server validation 
  try{
    //uniquenes check validation
    var [results, _] =await db.execute(`select id from users where username=?`,[username]);
    if(results && results.length > 0){
      console.log(`${username} already exists`);
      return res.redirect('/registration');
    }

    var [results, _] =await db.execute(`select id from users where email=?`,[email]);
    if(results && results.length > 0){
      console.log(`${email} already exists`);
      return res.redirect('/registration');
    }
   //insert into db
   var [insertResult,_] = await db.execute(
    `INSERT INTO  users(username,email,password) VALUE (?,?,?);`,
    [username,email,password]
   );
   if(insertResult && insertResult.affectedRows == 1){
      return res.redirect('/login');
   }else{
      return res.redirect('/registration');
   }
  }catch(err){
    next(err);
  }
})

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
