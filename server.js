var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-Width", "Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var lifeHacks = [
    {
        id: 1,
        title: "Life Hack: Tying Shoes",
        description: "Save time tying your shoe everyday",
        iframe: '<div class = "container"><iframe class = "video" src="https://www.youtube.com/embed/Bu9-psLUiks" frameborder="0" allowfullscreen></iframe></div>',
        thumbnail: "https://lh3.googleusercontent.com/b8FOwkMOpFqqYWxeAhxUhneVcKE-D3x2T-TPsHYoVNd38gErHaHyhJ5QxtpHq7MV=h310"
    },
    {
        id: 2,
        title: "Life Hack: Top 10",
        description: "Save time with these simple tips everyday",
        iframe: '<div class = "container"><iframe class = "video" src="https://www.youtube.com/embed/Bu9-psLUiks" frameborder="0" allowfullscreen></iframe></div>',
        thumbnail: "https://lh3.googleusercontent.com/b8FOwkMOpFqqYWxeAhxUhneVcKE-D3x2T-TPsHYoVNd38gErHaHyhJ5QxtpHq7MV=h310"
    },
];

app.get('/lifeHacks', function(req, res){
   console.log("GET from server");
   res.send(lifeHacks);
});

app.listen(6073);