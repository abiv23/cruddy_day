var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('movie').select()
  .then(movie_data => {
    res.render('index', {movies:movie_data})
  })
});

router.get('/new', function(req, res, next){
  res.render('new');
})

router.get('/:id', function(req, res, next){
  knex('movie').where("id", req.params.id).first()
  .then(movie_data => {
    res.render('id', {movie:movie_data})
  })
});

router.post('/new', function(req, res){
  knex('movie').insert({
   title = req.body.title,
   director = req.body.director,
   genre = req.body.genre,
   year = req.body.year},"*")
  .then(function(movie){
    res.json(movie);
  })
})


module.exports = router;
