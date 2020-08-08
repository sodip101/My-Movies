const mongoose=require(mongoose);
const Movie=require('../models/movieSchema.js');

//Get all Movies that user hasn't watched
exports.getWatchlist=(req,res)=>{
    Movie.find({watched: false})
        .then(result=>res.send(result))
        .catch(err=>console.log(err));
};


//Get One Movie
exports.getMovie=(req,res)=>{
    Movie.findById(req.params.id)
        .then(result=>res.send(result))
        .catch(err=>console.log(err));
};

//Add New Movie
exports.addMovie=(req,res)=>{
    const newMovie=new Movie({
        title: req.body.title,
        overview: req.body.overview,
        release_date: req.body.release_date,
        poster: req.body.poster,
        watched: req.body.watched
    });

    newMovie.save()
        .then(result=>res.send(result))
        .catch(err=>console.log(err));
};

//Change Watched Status
exports.changeToWatched=(req,res)=>{
    Movie.findByIdAndUpdate(req.params.id,{watched:true})
    .then(result=>res.send(result))
    .catch(err=>console.log(err));
};

//Delete Movie from Watchlist
exports.deleteMovie=(req,res)=>{
    Movie.findByIdAndDelete(req.params.id)
    .then(result=>res.send(result))
    .catch(err=>console.log(err));
}

