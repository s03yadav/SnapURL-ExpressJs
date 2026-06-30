const mongoose = require('mongoose');

async function connectDB(url){
    return await mongoose.connect(url)
    .then(console.log('CONNECTION ESTABLISHED WITH MONGO-DB'));
};

module.exports = {
    connectDB
}