const express = require('express');
const router  = express.Router();
const Movie   = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', async (req, res, next) => {
  let movies = await Movie.find();

  res.render('movies/list', { movies });
});

router.get('/movies/new', async (req, res, next) => {
  let body = {
    title: "Interstellar",
    overview: "Relatividad D:",
    cover: "https://pics.filmaffinity.com/interstellar-366875261-large.jpg",
  };

  let newMovie = new Movie(body);

  let movie = await newMovie.save();

  res.redirect(`/movies/${movie._id}`);
})

router.get('/movies/:id', async (req, res, next) => {
  let id = req.params.id;

  let movie = await Movie.findOne({_id:id});

  res.render('movies/detail', movie);
});

module.exports = router;
