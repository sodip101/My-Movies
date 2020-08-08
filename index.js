const express= require('express');
const app=express();
const mongoose=require('mongoose');
const port = process.env.PORT || 3000;
const searchRoute=require('./routes/movieSearch.js');
const watchlistRoute=require('./routes/watchlist.js');

//url parser
app.use(express.urlencoded({extended:true}));
//request body parser
app.use(express.json());

//Connecting to database
const url='database_url';;
mongoose.connect(url,{useUnifiedTopology:true, useNewUrlParser:true, useFindAndModify:true})
.then((result)=>{
  app.listen(port, () => {
    console.log('Database Connected...')
    console.log(`Server listening at http://localhost:${port}`);
  });
})
.catch((err)=>console.log(err));

app.use('/search',searchRoute);
app.use('/all',watchlistRoute);
app.use((req,res)=>{
  res.status(404).send('Not Found');
});
