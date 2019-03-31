require('dotenv').config();
process.env.NODE_ENV = "development";
var express = require('express');
var cors = require('cors');
var port = process.env.PORT || 3000;
var app = express();
var routes = require('./routes');
var whitelist = [
    'http://0.0.0.0:3000',
];
var corsOptions = {
    origin: function (origin, callback) {
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));
app.options('*', cors());
app.use(cors({ origin: 'http://ec2-3-16-186-30.us-east-2.compute.amazonaws.com' }));
app.use(express.static('public'));
app.listen(port, function () {
    console.log('Server started!');
});
app.use('/', routes);
