var express = require('express');
var router = express.Router();
var token = process.env.TOKEN;
var request = require('request');
var querystring = require('querystring');
var bodyParser = require('body-parser');
var cors = require('cors');
// use it before all route definitions
router.use(cors({ origin: 'http://ec2-3-16-186-30.us-east-2.compute.amazonaws.com' }));
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
router.get('/services/getCards', function (req, res) {
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
router.get('/services/clans', function (req, res) {
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
router.get('/services/clans/:clanTag/:members?', function (req, res) {
    var clanTag = encodeURIComponent(req.params.clanTag);
    console.log(clanTag);
    var members = (req.params.members);
    if (clanTag && !members) {
        request.get(('https://api.clashroyale.com/v1/clans/' + clanTag), {
            headers: { 'authorization': 'Bearer ' + token }
        }, function (error, response, body) {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            console.log('body:', body);
            res.send(body);
        });
    }
    else {
        request.get(('https://api.clashroyale.com/v1/clans/' + clanTag + '/' + members), {
            headers: { 'authorization': 'Bearer ' + token }
        }, function (error, response, body) {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            console.log('body:', body);
            res.send(body);
        });
    }
});
router.get('/services/clans/:clanTag/:warlog', function (req, res) {
    var clanTag = encodeURIComponent(req.params.clanTag);
    var warlog = (req.params.warlog);
    if (clanTag && !warlog) {
        request.get(('https://api.clashroyale.com/v1/clans/' + clanTag), {
            headers: { 'authorization': 'Bearer ' + token }
        }, function (error, response, body) {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            console.log('body:', body);
            res.send(body);
        });
    }
    else {
        request.get(('https://api.clashroyale.com/v1/clans/' + clanTag + '/' + warlog), {
            headers: { 'authorization': 'Bearer ' + token }
        }, function (error, response, body) {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            console.log('body:', body);
            res.send(body);
        });
    }
});
router.get('/services/clans/:clantag/:currentwar', function (req, res) {
    var clanTag = encodeURIComponent(req.params.clanTag);
    var currentwar = (req.params.currentwar);
    if (clanTag && !currentwar) {
        request.get(('https://api.clashroyale.com/v1/clans/' + clanTag), {
            headers: { 'authorization': 'Bearer ' + token }
        }, function (error, response, body) {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            console.log('body:', body);
            res.send(body);
        });
    }
    else {
        request.get(('https://api.clashroyale.com/v1/clans/' + clanTag + '/' + currentwar), {
            headers: { 'authorization': 'Bearer ' + token }
        }, function (error, response, body) {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            console.log('body:', body);
            res.send(body);
        });
    }
});
// Player Calls
router.get('/services/players/:playerTag', function (req, res) {
    var playerTag = encodeURIComponent(req.params.playerTag);
    request.get(('https://api.clashroyale.com/v1/players/' + playerTag), {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
router.get('/services/players/:playerTag/upcomingchests', function (req, res) {
    var playerTag = encodeURIComponent(req.params.playerTag);
    request.get(('https://api.clashroyale.com/v1/players/' + playerTag + '/upcomingchests'), {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
router.get('/services/players/:playerTag/battlelog', function (req, res) {
    var playerTag = encodeURIComponent(req.params.playerTag);
    request.get(('https://api.clashroyale.com/v1/players/' + playerTag + '/battlelog'), {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
router.get('/services/tournaments', function (req, res) {
    request.get('https://api.clashroyale.com/v1/tournaments', {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
router.get('/services/tournaments/:tournamentTag', function (req, res) {
    var tournamentTag = encodeURIComponent(req.params.tournamentTag);
    request.get(('https://api.clashroyale.com/v1/tournaments/' + tournamentTag), {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
router.get('/services/globaltournaments', function (req, res) {
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
router.get('/services/locations', function (req, res) {
    request.get('https://api.clashroyale.com/v1/locations', {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
router.get('/services/locations/:locationId', function (req, res) {
    var locationId = encodeURIComponent(req.params.locationId);
    request.get(('https://api.clashroyale.com/v1/locations/' + locationId), {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
router.get('/services/locations/:locationId/rankings/clans', function (req, res) {
    var locationId = encodeURIComponent(req.params.locationId);
    request.get(('https://api.clashroyale.com/v1/locations/' + locationId + '/rankings/clans'), {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
router.get('/services/locations/:locationId/rankings/players', function (req, res) {
    var locationId = encodeURIComponent(req.params.locationId);
    request.get(('https://api.clashroyale.com/v1/locations/' + locationId + '/rankings/players'), {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
router.get('/services/locations/:locationId/rankings/clanwars', function (req, res) {
    var locationId = encodeURIComponent(req.params.locationId);
    request.get(('https://api.clashroyale.com/v1/locations/' + locationId + '/rankings/clanwars'), {
        headers: { 'authorization': 'Bearer ' + token }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});
router.use(bodyParser.json());
router.route('/api/cats').post(function (req, res) {
    res.send(201, req.body);
});
module.exports = router;
