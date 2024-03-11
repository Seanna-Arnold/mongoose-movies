const Movie = require('../models/movie')

module.exports = {
    new: newMovie,
    create,
    index,
    show
}

async function show(req, res) {
    const movie = await Movie.findById(req.params.id)
    res.render('movies/show', {
        title: 'Movie Detail',
        movie
    })
}

async function index(req, res) {
    const movies = await Movie.find({})
    res.render('movies/index', { title: 'All Movies', movies })
}

function newMovie(req, res) {
    res.render('movies/new', {
        title: 'Add Movie',
        errorMsg: ''
    })
}

async function create(req, res) {
    // convert nowShowing's checkbox of nothing or "on" to boolean
    req.body.nowShowing = !!req.body.nowShowing;
    // remove any whitespace at start and end of cast
    req.body.cast = req.body.cast.trim();
    // split cast into an array if it's not an empty string - using a regular expression as a separator
    if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
    try {
      await Movie.create(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the movies index after we implement it
      res.redirect('/movies/new');
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('movies/new', { errorMsg: err.message });
    }
  }
  