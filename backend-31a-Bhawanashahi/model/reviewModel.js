const mongoose =  require('mongoose')



const reviewSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,

    },
    rating: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
        trim : true,
    },
   
})

const Reviews= mongoose.model('reviews', reviewSchema);
module.exports= Reviews;