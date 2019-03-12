const express = require('express');
const router = express.Router();
const token = process.env.TOKEN;
const request = require('request');
const querystring = require('querystring');


const clanSearchOptions = {
    headers: {'authorization': 'Bearer ' + token},
};
const queryParams = {name: 'SBS'};


router.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

router.get('', (req, res) => {
    res.send("WELCOME")
});

router.get('/home', (req, res) => {
    res.send('I am the home page');
});

// Get All CR Cards
router.get('/getCards', (req, res) => {
    request.get('https://api.clashroyale.com/v1/cards', {
        headers: {'authorization': 'Bearer ' + token}
    },  (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});

// Clan Calls
router.get('/clans' , (req, res) => {
     const urlQueryString = req.query;
    console.log(req.query);
    request.get('https://api.clashroyale.com/v1/clans', {
        headers: {
            'authorization': 'Bearer ' + token
        },
        qs: urlQueryString

    },
        (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});

router.get('/clans/:clanTag?/:members?', (req, res) => {
    const clanTag = req.params;
    request.get('https://api.clashroyale.com/v1/clans' + clanTag, {
        headers: {'authorization': 'Bearer ' + token}
    },  (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});

router.get('/clans/:clanTag/:warlog', (req, res) => {
    request.get('https://api.clashroyale.com/v1/cards', {
        headers: {'authorization': 'Bearer ' + token}
    },  (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});

router.get('/clans/:clantag/:currentwar', (req, res) => {
    request.get('https://api.clashroyale.com/v1/cards', {
        headers: {'authorization': 'Bearer ' + token}
    },  (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});

// Player Calls
router.get('/players/:playerTag', (req, res) => {
    request.get('https://api.clashroyale.com/v1/cards', {
        headers: {'authorization': 'Bearer ' + token}
    },  (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});

router.get('/players/:playerTag/upcomingchests', (req, res) => {
    request.get('https://api.clashroyale.com/v1/cards', {
        headers: {'authorization': 'Bearer ' + token}
    },  (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});

router.get('/players/:playerTag/battlelog', (req, res) => {
    request.get('https://api.clashroyale.com/v1/cards', {
        headers: {'authorization': 'Bearer ' + token}
    },  (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});

router.get('/tournaments', (req, res) => {
    request.get('https://api.clashroyale.com/v1/tournaments', {
        headers: {'authorization': 'Bearer ' + token}
    },  (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});

router.get('/tournaments/tournamentTag', (req, res) => {
    request.get('https://api.clashroyale.com/v1/cards', {
        headers: {'authorization': 'Bearer ' + token}
    },  (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});

router.get('/globaltournaments', (req, res) => {
    request.get('https://api.clashroyale.com/v1/globaltournaments', {
        headers: {'authorization': 'Bearer ' + token}
    },  (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});


// Location Calls
router.get('/locations', (req, res) => {
    request.get('https://api.clashroyale.com/v1/locations', {
        headers: {'authorization': 'Bearer ' + token}
    },  (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});

router.get('/locations/:locationId', (req, res) => {
    request.get('https://api.clashroyale.com/v1/cards', {
        headers: {'authorization': 'Bearer ' + token}
    },  (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});

router.get('/locations/:locationId/rankings/clans', (req, res) => {
    request.get('https://api.clashroyale.com/v1/cards', {
        headers: {'authorization': 'Bearer ' + token}
    },  (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});

router.get('/locations/:locationId/rankings/players', (req, res) => {
    request.get('https://api.clashroyale.com/v1/cards', {
        headers: {'authorization': 'Bearer ' + token}
    },  (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});

router.get('/locations/:locationId/rankings/clanwars', (req, res) => {
    request.get('https://api.clashroyale.com/v1/cards', {
        headers: {'authorization': 'Bearer ' + token}
    },  (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});


const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.route('/api/cats').post((req, res) => {
    res.send(201, req.body);
});




module.exports = router;