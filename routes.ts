const express = require('express');
const router = express.Router();
const token = process.env.TOKEN;
const request = require('request');
const querystring = require('querystring');
const bodyParser = require('body-parser');

var cors = require('cors');

// use it before all route definitions
router.use(cors({origin: 'http://sbs-clan.s3-website-us-west-1.amazonaws.com'}));



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
router.get('/services/getCards', (req, res) => {
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
router.get('/services/clans' , (req, res) => {
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

router.get('/services/clans/:clanTag/:members?', (req, res) => {
    const clanTag: string = encodeURIComponent(req.params.clanTag);
    console.log(clanTag);
    const members: string = (req.params.members);
    if(clanTag && !members) {
        request.get(('https://api.clashroyale.com/v1/clans/' + clanTag), {
                headers: {'authorization': 'Bearer ' + token}
            },
            (error, response, body) => {
                console.log('error:', error);
                console.log('statusCode:', response && response.statusCode);
                console.log('body:', body);
                res.send(body);
            });
    } else {
        request.get(('https://api.clashroyale.com/v1/clans/' + clanTag + '/' + members), {
                headers: {'authorization': 'Bearer ' + token}
            },
            (error, response, body) => {
                console.log('error:', error);
                console.log('statusCode:', response && response.statusCode);
                console.log('body:', body);
                res.send(body);
            });
    }
});

router.get('/services/clans/:clanTag/:warlog', (req, res) => {
    const clanTag: string = encodeURIComponent(req.params.clanTag);
    const warlog: string = (req.params.warlog);
    if(clanTag && !warlog) {
        request.get(('https://api.clashroyale.com/v1/clans/' + clanTag), {
                headers: {'authorization': 'Bearer ' + token}
            },
            (error, response, body) => {
                console.log('error:', error);
                console.log('statusCode:', response && response.statusCode);
                console.log('body:', body);
                res.send(body);
            });
    } else {
        request.get(('https://api.clashroyale.com/v1/clans/' + clanTag + '/' + warlog), {
                headers: {'authorization': 'Bearer ' + token}
            },
            (error, response, body) => {
                console.log('error:', error);
                console.log('statusCode:', response && response.statusCode);
                console.log('body:', body);
                res.send(body);
            });
    }
});

router.get('/services/clans/:clantag/:currentwar', (req, res) => {
    const clanTag: string = encodeURIComponent(req.params.clanTag);
    const currentwar: string = (req.params.currentwar);
    if(clanTag && !currentwar) {
        request.get(('https://api.clashroyale.com/v1/clans/' + clanTag), {
                headers: {'authorization': 'Bearer ' + token}
            },
            (error, response, body) => {
                console.log('error:', error);
                console.log('statusCode:', response && response.statusCode);
                console.log('body:', body);
                res.send(body);
            });
    } else {
        request.get(('https://api.clashroyale.com/v1/clans/' + clanTag + '/' + currentwar), {
                headers: {'authorization': 'Bearer ' + token}
            },
            (error, response, body) => {
                console.log('error:', error);
                console.log('statusCode:', response && response.statusCode);
                console.log('body:', body);
                res.send(body);
            });
    }
});

// Player Calls
router.get('/services/players/:playerTag', (req, res) => {
    const playerTag: string = encodeURIComponent(req.params.playerTag);
    request.get(('https://api.clashroyale.com/v1/players/' + playerTag), {
        headers: {'authorization': 'Bearer ' + token}
    },  (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});

router.get('/services/players/:playerTag/upcomingchests', (req, res) => {
    const playerTag: string = encodeURIComponent(req.params.playerTag);
        request.get(('https://api.clashroyale.com/v1/players/' + playerTag + '/upcomingchests'), {
                headers: {'authorization': 'Bearer ' + token}
            },
            (error, response, body) => {
                console.log('error:', error);
                console.log('statusCode:', response && response.statusCode);
                console.log('body:', body);
                res.send(body);
            });
});

router.get('/services/players/:playerTag/battlelog', (req, res) => {
    const playerTag: string = encodeURIComponent(req.params.playerTag);
    request.get(('https://api.clashroyale.com/v1/players/' + playerTag + '/battlelog'), {
            headers: {'authorization': 'Bearer ' + token}
        },
        (error, response, body) => {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            console.log('body:', body);
            res.send(body);
        });
});

router.get('/services/tournaments', (req, res) => {
    request.get('https://api.clashroyale.com/v1/tournaments', {
        headers: {'authorization': 'Bearer ' + token}
    },  (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});

router.get('/services/tournaments/:tournamentTag', (req, res) => {
    const tournamentTag: string = encodeURIComponent(req.params.tournamentTag);
    request.get(('https://api.clashroyale.com/v1/tournaments/' + tournamentTag), {
        headers: {'authorization': 'Bearer ' + token}
    },  (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});

router.get('/services/globaltournaments', (req, res) => {
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
router.get('/services/locations', (req, res) => {
    request.get('https://api.clashroyale.com/v1/locations', {
        headers: {'authorization': 'Bearer ' + token}
    },  (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});

router.get('/services/locations/:locationId', (req, res) => {
    const locationId: string = encodeURIComponent(req.params.locationId);
    request.get(('https://api.clashroyale.com/v1/locations/' + locationId), {
        headers: {'authorization': 'Bearer ' + token}
    },  (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});

router.get('/services/locations/:locationId/rankings/clans', (req, res) => {
    const locationId: string = encodeURIComponent(req.params.locationId);
    request.get(('https://api.clashroyale.com/v1/locations/' + locationId + '/rankings/clans'), {
        headers: {'authorization': 'Bearer ' + token}
    },  (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});

router.get('/services/locations/:locationId/rankings/players', (req, res) => {
    const locationId: string = encodeURIComponent(req.params.locationId);
    request.get(('https://api.clashroyale.com/v1/locations/' + locationId + '/rankings/players'), {
        headers: {'authorization': 'Bearer ' + token}
    },  (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});

router.get('/services/locations/:locationId/rankings/clanwars', (req, res) => {
    const locationId: string = encodeURIComponent(req.params.locationId);
    request.get(('https://api.clashroyale.com/v1/locations/' + locationId + '/rankings/clanwars'), {
        headers: {'authorization': 'Bearer ' + token}
    },  (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});


router.use(bodyParser.json());
router.route('/api/cats').post((req, res) => {
    res.send(201, req.body);
});




module.exports = router;