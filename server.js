require('dotenv').config();
process.env.NODE_ENV = "development";
var express = require('express');
var cors = require('cors');
var port = process.env.PORT || 3000;
var app = express();
var axios = require('axios');
var routes = require('./routes');
// const clashRoyalApi = axios.create({
//     url: 'https://api.clashroyale.com/v1/cards',
//     headers: {'authorization': 'Bearer ' + token},
// });
app.use(express.static('public'));
app.listen(port, function () {
    console.log('Server started!');
});
app.use(cors());
app.options('*', cors());
app.use('/', routes);
// axios('/getCards', clashRoyalApi)
//     .then( (response) =>{
//         console.log(response);
//     })
//     .catch( (error) => {
//         console.log(error);
//     });
