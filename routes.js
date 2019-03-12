var express = require('express');
var router = express.Router();
var token = process.env.TOKEN;
var request = require('request');
var querystring = require('querystring');
var clanSearchOptions = {
    headers: { 'authorization': 'Bearer ' + token },
};
var queryParams = { name: 'SBS' };
router.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
});
router.get('', function (req, res) {
    res.send("WELCOME");
});
router.get('/home', function (req, res) {
    res.send('I am the home page');
});
// Get All CR Cards
router.get('/getCards', function (req, res) {
    request.get('https://api.clashroyale.com/v1/cards', {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
// Clan Calls
router.get('/clans', function (req, res) {
    var urlQueryString = req.query;
    console.log(req.query);
    request.get('https://api.clashroyale.com/v1/clans', {
        headers: {
            'authorization': 'Bearer ' + token
        },
        qs: urlQueryString
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
router.get('/clans/:clanTag?/:members?', function (req, res) {
    var clanTag = req.params;
    request.get('https://api.clashroyale.com/v1/clans' + clanTag, {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
router.get('/clans/:clanTag/:warlog', function (req, res) {
    request.get('https://api.clashroyale.com/v1/cards', {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
router.get('/clans/:clantag/:currentwar', function (req, res) {
    request.get('https://api.clashroyale.com/v1/cards', {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
// Player Calls
router.get('/players/:playerTag', function (req, res) {
    request.get('https://api.clashroyale.com/v1/cards', {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
router.get('/players/:playerTag/upcomingchests', function (req, res) {
    request.get('https://api.clashroyale.com/v1/cards', {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
router.get('/players/:playerTag/battlelog', function (req, res) {
    request.get('https://api.clashroyale.com/v1/cards', {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
router.get('/tournaments', function (req, res) {
    request.get('https://api.clashroyale.com/v1/tournaments', {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
router.get('/tournaments/tournamentTag', function (req, res) {
    request.get('https://api.clashroyale.com/v1/cards', {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
router.get('/globaltournaments', function (req, res) {
    request.get('https://api.clashroyale.com/v1/globaltournaments', {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
// Location Calls
router.get('/locations', function (req, res) {
    request.get('https://api.clashroyale.com/v1/locations', {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
router.get('/locations/:locationId', function (req, res) {
    request.get('https://api.clashroyale.com/v1/cards', {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
router.get('/locations/:locationId/rankings/clans', function (req, res) {
    request.get('https://api.clashroyale.com/v1/cards', {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
router.get('/locations/:locationId/rankings/players', function (req, res) {
    request.get('https://api.clashroyale.com/v1/cards', {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
router.get('/locations/:locationId/rankings/clanwars', function (req, res) {
    request.get('https://api.clashroyale.com/v1/cards', {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.route('/api/cats').post(function (req, res) {
    res.send(201, req.body);
});
module.exports = router;
