const {nanoid} = require('nanoid');
const URL = require('../models/url');

async function handlePostUrl(req,res){
    const sid = nanoid(8);
    const body = req.body;
    if (!body){
        return res.status(400).json('Incomeplete Fields!');
    }
    else{
        const result = await URL.create({
            shortUrl : sid,
            redirectUrl : body.url,
            visitCount : 0
        });
        // return res.status(201).json({url : `http://localhost:8001/${sid}`})
        return res.render('home', {url : `http://localhost:8001/${sid}`})
    }
}

async function handleGetUrl(req,res){
    return res.render('home',{url : ""})
}

async function handleRedirectUrl(req,res){
    const shortUrl = req.params.shid;
    const url = await URL.findOneAndUpdate({shortUrl}, {$inc :{visitCount : +1}})
    console.log(url);
    return res.redirect(url.redirectUrl);
}

//For Admin & Testing use only
async function handleAllUrls(req,res){
    const all = await URL.find({});
    return res.json(all);
}


module.exports = {
    handlePostUrl,
    handleGetUrl,
    handleRedirectUrl,
    handleAllUrls
}