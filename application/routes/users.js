var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
const db = require('../conf/database');
const{doesEmailExist,doesUsernameExist,checkEmail,checkPassword,checkUsername} =require("../middleware/validation");




//localhost:300/users/register
router.post('/register',
  /*checkUsername,
  checkEmail, 
  checkPassword,
  doesUsernameExist, 
  doesEmailExist,*/
  async function(req,res,next){
  var {username,email,password} = req.body;
    try{
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

router.get("/profile/:id",function(req,res,next){
  //profilepage
  res.end();
});

module.exports = router;
