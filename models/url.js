const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortUrl : {
        type : String,
        require : true,
        unique : true
    },
    redirectUrl : {
        type : String,
        require : true
    },
    visitCount : {
        type : Number
    }
},{timestamps: true}
);

const URL = mongoose.model('urlModel', urlSchema);

module.exports = URL;
