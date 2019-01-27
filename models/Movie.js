const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: { 
    type: String,
    required: true
  },
  cover: { 
    type: String, 
    required: true
  },
  overview: { 
    type: String,
    required: true
  },
  duration: Number,
  genre: [ String ],
  score: Number,
  trailer: String,
  director: String,
  year: Number,
  cast: [ String ],
  link: String,
});

module.exports = mongoose.model('Movie', MovieSchema); 