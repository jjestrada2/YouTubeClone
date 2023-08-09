var pathToFFMPEG = require("ffmpeg-static");
var promisify = require('util').promisify;
var exec = promisify(require("child_process").exec);
var db = require('../conf/database');
module.exports = {
    makeThumbnail: async function (req, res, next) {
        if (!req.file) {
            next(new Error("File upload failed"));
        } else {
            try {
                var destinationOfThumbnail = `public/uploads/images/thumbnail-${req.file.filename.split(".")[0]}.png`;
                var thumbnailCommand = `"${pathToFFMPEG}" -ss 00:00:01 -i ${req.file.path} -y -s 200x200 -vframes 1 -f image2 ${destinationOfThumbnail}`;
                var { stdout, stderr } = await exec(thumbnailCommand);
                req.file.thumbnail = destinationOfThumbnail;
                next();
            } catch (error) {
                next(error);
            }
        }
    },

    getPostById: async function(req,res,next){
        var{id} = req.params;
        try{
            var[results, _ ] = await db.execute(`SELECT p.id, p.title,p.description,p.video,p.createdAt,u.username
            FROM posts p 
            JOIN  users u
            ON fk_userId = u.id
            WHERE p.id = ?;
            `,[id]);
            const post = results[0];

            if(!post){
                req.flash("error",`this is not the post you are looking for`);
                return req.session.save(function(err){
                    if(err) next(err);
                    return res.redirect('/');
                });
            }else{
                res.locals.post = post;
                next();
            }
        }catch(err){
            next(err);
        }
    },

    getCommentsForPostById: async function(req,res,next){
        const{id}= req.params;
        try{
            var [results,_] = await db.execute(`SELECT c.id, c.text,c.createdAt,u.username
            from comments c
            JOIN users u
            ON c.fk_userId = u.id
            WHERE c.fk_postID=?;`,[id]);

            res.locals.post.comments = results;
            next();
       

        }catch(error){
            next();
        }
        
    },

    getRecentPosts: async function(req, res, next){
       next();
    },
    getPostByUserId: async function(req,res,next){
        next();
    }
}