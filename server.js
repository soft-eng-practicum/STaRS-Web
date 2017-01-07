var PouchDB = require('pouchdb');
var express = require('express');
var cors = require('cors');
var path = require('path');
var app = express();

app.options(/\.*/, function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
	res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
	res.sendStatus(200);
});

app.use(cors({
    origin: '*',
    withCredentials: false,
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin' ]
}));

app.use(express.static(path.join(__dirname, 'client')));


app.set('port', process.env.PORT || 3197);

/*
 |--------------------------------------------------------------------------
 | Start the Server
 |--------------------------------------------------------------------------
 */
app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});