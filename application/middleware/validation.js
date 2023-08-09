const db = require('../conf/database');
const validator = require('validator');

module.exports = {
    checkUsername: function(req,res,next){
        next();
    },

    checkEmail: function(req,res,next){
        next();
    },

    checkPassword: function(req,res,next){
      var{password,cpassword} = req.body;
      if(validator.isStrongPassword(password)&&password===cpassword){
        next();
      }else{
        req.flash("perror","invalid password");
        return res.redirect('/register');
      }

        
    },

    doesUsernameExist: async function(req,res,next){
        var {username} = req.body;
        var [results, _] =await db.execute(`select id from users where username=?`,[username]);
        if(results && results.length > 0){
          req.flash("error",`${username} Already exists`);
          return req.session.save(function(err){
            if(err) next(err);
            return res.redirect('/registration');
          });
        }else{
            next();
        }
        
    },

    doesEmailExist: async function(req,res,next){
      var{email} = req.body;
        var [results, _] =await db.execute(`select id from users where email=?`,[email]);
        if(results && results.length > 0){
          req.flash("error",`${email} Already exists`);
          return req.session.save(function(err){
            if(err) next(err);
            return res.redirect('/registration');
          });
        }else{
            next();
        }
    }
}