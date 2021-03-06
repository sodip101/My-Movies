const Movie=require('../models/movieSchema.js');

//Get all Movies that user hasn't watched
exports.getWatchlist=(req,res)=>{
    Movie.find({watched: false})
    .then(result=>res.send(result))
    .catch(err=>res.status(500).send(err.message));
};

//Get all Movies that user has watched
exports.getWatchedlist=(req,res)=>{
    Movie.find({watched: true})
    .then(result=>res.send(result))
    .catch(err=>res.status(500).send(err.message));
};

//Get One Movie
exports.getMovie=(req,res)=>{
    Movie.findById(req.params.id)
    .then(result=>res.send(result))
    .catch(err=>res.status(404).send(err.message));
};

//Add New Movie
exports.addMovie=(req,res)=>{
    const newMovie=new Movie({
        title: req.body.title,
        overview: req.body.overview,
        release_date: req.body.release_date,
        poster: req.body.poster
    });

    newMovie.save()
    .then(result=>res.send(result))
    .catch(err=>res.status(500).send(err.message));
};

//Change Watched Status
exports.changeToWatched=(req,res)=>{
    Movie.findByIdAndUpdate(req.params.id,{watched:true})
    .then(result=>res.send(result))
    .catch(err=>res.status(500).send(err.message));
};

//Delete Movie from Watchlist
exports.deleteMovie=(req,res)=>{
    Movie.findByIdAndDelete(req.params.id)
    .then(result=>res.send(result))
    .catch(err=>res.status(404).send(err.message));
};