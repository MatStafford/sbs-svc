require('dotenv').config();
process.env.NODE_ENV= "development";

const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();
const routes = require('./routes');

const whitelist = [
    'http://0.0.0.0:3000',
];
const corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));

app.options('*', cors());
app.use(cors({origin: 'http://sbs-clan.s3-website-us-west-1.amazonaws.com'}));
app.use(express.static('public'));

app.listen(port, () => {
    console.log('Server started!');
});

app.use('/', routes);
