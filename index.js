const express= require('express');
const app=express();
const mongoose=require('mongoose');
const port = 3000;
const searchRoute=require('./routes/movieSearch.js');
const watchlistRoute=require('./routes/watchlist.js');

app.use(express.urlencoded({extended:true}));
app.use('/search',searchRoute);
app.use('/all',watchlistRoute);

//Connecting to database
const url='mongodb+srv://pidos:3A8wKoUbGBhcD8dV@cluster0-rfghy.gcp.mongodb.net/watchlist?retryWrites=true&w=majority';;
mongoose.connect(url,{useUnifiedTopology:true, useNewUrlParser:true})
.then((result)=>{
  app.listen(port, () => {
    console.log('Database Connected...')
    console.log(`Server listening at http://localhost:${port}`);
  });
})
.catch((err)=>console.log(err));