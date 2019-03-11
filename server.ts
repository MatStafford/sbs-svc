require('dotenv').config();
process.env.NODE_ENV= "development";

const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();
const token = process.env.TOKEN;
const axios = require('axios');
const request = require('request');

// const clashRoyalApi = axios.create({
//     url: 'https://api.clashroyale.com/v1/cards',
//     headers: {'authorization': 'Bearer ' + token},
// });

app.listen(port, () => {
    console.log('Server started!');
});
console.log(token);
app.use(cors());
app.options('*', cors());


const router = express.Router();
router.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use('/', router);

router.get('', (req, res) => {
    res.send("WELCOME")
});

router.get('/home', (req, res) => {
    res.send('I am the home page');
});

app.get('/sample', (req, res) => {
    res.send('this is a sample!');
});

request.get('https://api.clashroyale.com/v1/cards', {
    headers: {'authorization': 'Bearer ' + token}
},  (error, response, body) => {

    console.log('error:' + token, error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
});

router.get('https://api.clashroyale.com/v1/cards', (req, res) => {
    console.log(res);
});

// axios('/getCards', clashRoyalApi)
//     .then( (response) =>{
//         console.log(response);
//     })
//     .catch( (error) => {
//         console.log(error);
//     });

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.route('/api/cats').post((req, res) => {
    res.send(201, req.body);
});