var express = require('express');
var router = express.Router();

//create a list
const list = [
  {id: 1, title: 'Activity 1'},
  {id: 2, title: 'Activity 2'},
  {id: 3, title: 'Activity 3'},
  {id: 4, title: 'Activity 4'},
  {id: 5, title: 'Activity 5'},

];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', subHeading: 'Class 01' , list: list});
});

module.exports = router;
