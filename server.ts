require('dotenv').config();
process.env.NODE_ENV= "development";

const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();
const axios = require('axios');
const routes = require('./routes');

// const clashRoyalApi = axios.create({
//     url: 'https://api.clashroyale.com/v1/cards',
//     headers: {'authorization': 'Bearer ' + token},
// });

app.use(express.static('public'));

app.listen(port, () => {
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

