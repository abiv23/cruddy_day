var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
    knex('movie').select()
        .then(movie_data => {
            res.render('index', {
                movies: movie_data
            })
        })
})

router.get('/new', function(req, res, next) {
    res.render('new');
})

function validMovie(movie) {
    return typeof movie.title == 'string' &&
        movie.title.trim() != '' &&
        typeof movie.director == 'string' &&
        movie.director.trim() != '' &&
        typeof movie.genre == 'string' &&
        movie.genre.trim() != '' &&
        typeof movie.year != 'undefined' &&
        !isNaN(movie.year) &&
        typeof movie.img == 'string' &&
        movie.img.trim() != ''
}

router.post('/new', function(req, res) {
    if (validMovie(req.body)) {
        knex('movie').insert({
            title: req.body.title,
            director: req.body.director,
            genre: req.body.genre,
            year: req.body.year,
            img: req.body.img
        }).returning('id').then(data => {
            res.redirect('/' + data);
        })
    } else {
        res.render('new', {
            message: 'invalid movie',
            data: req.body,
        })
    }
})

router.get('/:id/edit', function(req, res) {
    knex('movie').where('id', req.params.id).first()
        .then(data => {
            res.render('edit', {
                movie: data
            })
        })
})


router.put('/:id', function(req, res) {
    knex('movie').where('id', req.params.id).update(req.body)
        .then(() => {
            res.redirect('/' + req.params.id)
        })
})

router.get('/:id/delete', function(req, res) {
    knex('movie').where('id', req.params.id).first()
        .then(data => {
            res.render('delete', {
              movie: data
            })
        })
})

router.delete('/:id/delete', function(req, res) {
    knex('movie').where('id', req.params.id).first().del()
        .then(() => {
            res.redirect('/')
        })
})

router.get('/:id', function(req, res, next) {
    if (!isNaN(req.params.id)) {
        knex('movie').where("id", req.params.id).first()
            .then(movie_data => {
                res.render('id', {
                    movie: movie_data
                })
            })
    } else {
        res.render('error', {
            message: 'invalid id'
        })
    }
})

module.exports = router;
