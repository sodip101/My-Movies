const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const movieSchema=new Schema({
    title : {type:String, required:true},
    overview : {type:String, required:true},
    release_date: {type:String, required:true},
    poster: {type: String, required:true},
    watched: {type: Boolean, required: true, default:false}
});

module.exports=new mongoose.model('Movie',movieSchema);