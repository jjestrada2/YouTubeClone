var express = require('express');
var router =  express.Router();
var multer = require('multer');
const { makeThumbnail, getPostById, getCommentsForPostById } = require('../middleware/posts');
const db = require('../conf/database');
const { isLoggedIn } = require('../middleware/auth');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/videos') // save video in a specific place //dont use "/"public/uploads/videos becasue would be the root! add / in the frontend
    },
    filename: function (req, file, cb) {//change name of the file
      const fileExt = file.mimetype.split('/')[1];
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, `${file.fieldname}-${uniqueSuffix}.${fileExt}`)
    }
  })
  
  const upload = multer({ storage: storage })


//localhost:300/posts/create
router.post('/create',isLoggedIn ,upload.single('uploadVideo'),makeThumbnail, async function(req,res,next){
  //res.end();
  var {title, description} = req.body;
  var {path, thumbnail} = req.file;
  var {userId} = req.session.user;

  
 try{
    var[insertResult,_] = await db.execute(`INSERT INTO posts(title,description,video,thumbnail,fk_userId) 
    VALUE
    (?,?,?,?,?);`,[title,description,path,thumbnail,userId]);
    //ERROR---------->Cannot set headers after they are sent to the client
    if(insertResult && insertResult.affectedRow == 1){
      req.flash("succes","Your post was create!");
      return req.session.save(function(err){
        if(err) next(err);
        return res.redirect('/');
      });
      
    }else{
        req.flash("error","Your post could not be made, please try again later");
        return req.session.save(function(err){
          if(err) next(err);
          return res.redirect('/postvideo');
        });

    }
  }catch(err){
    next(err);
  }
});

//localhost::3000/posts/search?key=value
router.get("/search",async function(req,res,next){
  var{ key } = req.query;
  try{
    const searchValue = `%${key}%`;
    var [results,_] = await db.execute(`select id, title,description,thumbnail, concat_ws("",title,
    description) as haystack
    FROM posts
    HAVING haystack like ?;`,[searchValue]);
    if(results && results.length > 0){
      res.locals.count = results.length;
      res.locals.results = results;
      res.locals.searchValue = key;
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

//localhost:3000/posts/1
router.get("/:id(\\d+)",getPostById, getCommentsForPostById,function(req,res,next){
  res.render('viewpost',{title:"Viewpost",css :["viewpost.css"],js:["viewpost.js"]});
});

router.delete("/:id", function(req,res,next){
  res.send();
});
module.exports = router;