require('dotenv').config();
process.env.NODE_ENV= "development";

const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();
const routes = require('./routes');
const passport = require('passport');
const bodyParser = require('body-parser');
const crudRepository = require('./database/crudRepository');
const whitelist = [
    'http://0.0.0.0:3000',
];
const corsOptions = {
    origin: function(origin, callback){
        let originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};

    // Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

crudRepository.createConnection();

    // Routes & Handlers
    app.listen(port, () => console.log(`Server is listening on port: ${port}`));

app.use(cors(corsOptions));
app.use(passport.initialize());
app.options('*', cors());
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.static('public'));

app.use('/', routes);
