var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
// use it!
var survey;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render("index")
})
app.post('/survey', function(req, res){
    console.log("POST DATA \n\n", req.body)
    survey = req.body;
    res.redirect('/show');
})
app.get('/show', function (req, res) {
    console.log(survey);
    res.render("show", {data: survey});
})

app.listen(8000, function () {
    console.log("listening on port 8000");
});