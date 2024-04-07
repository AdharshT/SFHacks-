var express = require('express');
const {isLoggedIn} = require('../middleware/protectors');
const {getRecentPosts, getPostById, getCommentsForPostsById} = require('../middleware/posts');
var router = express.Router();

/* GET home page. */
router.get('/', getRecentPosts , function(req, res, next) {
  res.render('index', { title: 'CSC 317 App', name:"[Insert your name here]" });
});

router.get("/login", function(req, res){
  res.render('login', {css:["formstyle.css"]});
})

//Method: GET
//localhost:3000/register
router.get("/register", function(req, res){
  res.render('registration',{css:["formstyle.css"], /*js:
["registration.js"]*/});
})



module.exports = router;
