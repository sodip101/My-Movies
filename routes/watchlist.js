const express=require('express');
const router=express.Router();
const watchlist=require('../controllers/watchlist');

//Get the movies that the user hasn't watched
router.get('/watchlist',watchlist.getWatchlist);

//Get the movies that the user has watched
router.get('/watched',watchlist.getWatchedlist);

//Get a specific movie from the list
router.get('/:id',watchlist.getMovie);

//Add new movie
router.post('/add',watchlist.addMovie);

//Update watch status
router.put('/:id',watchlist.changeToWatched);

//Delete Movie from database
router.delete('/:id',watchlist.deleteMovie);