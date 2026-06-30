const express = require('express');
const app = express();
const PORT = 8001;
const urlRoute = require('./routes/user.js')
const path = require('path');
const {connectDB} = require('./connection')

connectDB('mongodb://127.0.0.1:27017/urlShortnerPr');

app.use(express.urlencoded({extended:true}));
app.use('/', urlRoute);

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))

app.listen(PORT,()=> console.log('SERVER STARTED ON PORT:', PORT));