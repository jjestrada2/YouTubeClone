var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
const db = require('../conf/database');



//localhost:300/users/register
router.post('/register',async function(req,res,next){
  var {username,email,password} = req.body;
  //server validation 
  try{
    //uniquenes check validation
    var [results, _] =await db.execute(`select id from users where username=?`,[username]);
    if(results && results.length > 0){
      req.flash("error",`${username} Already exists`);
      return req.session.save(function(err){
        if(err) next(err);
        return res.redirect('/registration');
      });
      
    }

    var [results, _] =await db.execute(`select id from users where email=?`,[email]);
    if(results && results.length > 0){
      req.flash("error",`${email} Already exists`);
      return req.session.save(function(err){
        if(err) next(err);
        return res.redirect('/registration');
      });
    }
    console.log(req.body);
  var hashedPassword = await bcrypt.hash(password,5);

   //insert into db
   var [insertResult,_] = await db.execute(
    `INSERT INTO  users(username,email,password) VALUE (?,?,?);`,
    [username,email,hashedPassword]
   );

   //respond
   if(insertResult && insertResult.affectedRows == 1){
    req.flash("success","You are now one of us!");
    return req.session.save(function(err){
      if(err) next(err);
      return res.redirect("/login");
    });
     
   }else{
    req.flash("error","Erro try later");
    return req.session.save(function(err){
      if(err) next(err);
      return res.redirect('/registration');
    });
    
   }
  }catch(err){
    next(err);
  }
})
//localhost:300/login
router.post("/login",async function(req,res,next){
  var {username, password} = req.body;
 
  try{
    var [results,_] = await db.execute(`select id, username,email,password from users where username=?`,[username]);
    const user = results[0];
    //check username
    if(!user){
      req.flash("error","Login Failed: Invalid Credentials");
      return req.session.save(function(err){
        if(err) next(err);
        return res.redirect("/login");
      });
      
    }
    //checkPassword
    console.log(password);
    console.log(user.password);
    //---ERROR----HELP COMPARE FUNCTION DOESNT WORK
    var passwordsMatch = await bcrypt.compare(password,user.password);
    if(passwordsMatch){
      req.session.user = {
        userId: user.id,
        username: user.username,
        email: user.email
      };
      req.flash("success","You are now logged in");
      return req.session.save(function(err){
        if(err) next(err);
        return res.redirect("/");
      });
      
    }else{
      req.flash("error","Login Failed: Invalid Credentials");
      return req.session.save(function(err){
        if(err) next(err);
        return res.redirect("/login");
      });
      
    }

  }catch(err){
    next(err);
  }
});

//localhost300logout
router.post("/logout",function(req,res,next){
  req.session.destroy(function(err){
    if(err) next(err);
    return res.redirect("/");
  });
});

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
