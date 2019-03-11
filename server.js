require('dotenv').config();
process.env.NODE_ENV = "development";
var express = require('express');
var cors = require('cors');
var port = process.env.PORT || 3000;
var app = express();
var token = process.env.TOKEN;
var axios = require('axios');
var request = require('request');
// const clashRoyalApi = axios.create({
//     url: 'https://api.clashroyale.com/v1/cards',
//     headers: {'authorization': 'Bearer ' + token},
// });
app.listen(port, function () {
    console.log('Server started!');
});
console.log(token);
app.use(cors());
app.options('*', cors());
var router = express.Router();
router.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
});
app.use('/', router);
router.get('', function (req, res) {
    res.send("WELCOME");
});
router.get('/home', function (req, res) {
    res.send('I am the home page');
});
app.get('/sample', function (req, res) {
    res.send('this is a sample!');
});
request.get('https://api.clashroyale.com/v1/cards', {
    headers: { 'authorization': 'Bearer ' + token }
}, function (error, response, body) {
    console.log('error:' + token, error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
});
router.get('https://api.clashroyale.com/v1/cards', function (req, res) {
    console.log(res);
});
// axios('/getCards', clashRoyalApi)
//     .then( (response) =>{
//         console.log(response);
//     })
//     .catch( (error) => {
//         console.log(error);
//     });
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.route('/api/cats').post(function (req, res) {
    res.send(201, req.body);
});
