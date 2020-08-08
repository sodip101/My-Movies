const express=require('express');
const router=express.Router();
const movieSearch=require('../controllers/movie.js');

router.get('/',movieSearch);