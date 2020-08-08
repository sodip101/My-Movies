const fetch=require('node-fetch');
const api_key=require('./config.json').api_key;

async function movieSearch(movie_name,api_key){
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${movie_name}&page=1&include_adult=true`;
    try{
        const data=await fetch(url);
        const result=await data.json();
        const final=result['results'][0];
        const poster=final['poster_path'];
        final['poster_path']=`https://image.tmdb.org/t/p/original/${poster}`;
        return final;
    }catch(err){
        console.error(err);
    }
}

// movieSearch('Little Miss Sunshine',api_key)
// .then(result=>console.log(result));

function searchNewMovie(req,res){
    const movie=req.query.search;
    movieSearch(movie,api_key)
    .then(data=>res.json(data));
}

module.exports=searchNewMovie;