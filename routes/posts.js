// this is routes/posts.js
// the controller 

//var Post = require('../lib/post');

var db = require('../models')

exports.form = function(req, res) {
    res.render('post', {title:'Post'});
};

exports.submit = function(req, res, next) {
    var data = req.body.post; 
    
    var postdata = 
        {        
        "title": data.title,
        "body": data.body
    };
    
    db.Post.create(postdata).success(function (){
        res.redirect('/')
    })  
};


