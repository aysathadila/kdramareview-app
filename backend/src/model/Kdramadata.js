const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/kdramareview', { useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;

var NewKdramaSchema = new Schema({
    _id : Number,
    title : String,
    genre : String,
    description : String,
    image : String
});

var KdramaData = mongoose.model('kdramas', NewKdramaSchema);                        //UserData is the model and NewBookData is the schema,kdramas is the name of collectn

module.exports = KdramaData;