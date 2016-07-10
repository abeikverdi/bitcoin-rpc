var app = require('express');
var router = app.Router();
var bitcoin = require('bitcoin');

router.get('/', function (req, res) {
	res.render('index');
});

router.post('/', function (req, res) {
	var txid = req.body.txid;
	var client = new bitcoin.Client({
		host: 'localhost',
		port: 8332,
		user: 'abeikverdi',
		pass: 'ali123',
		timeout: 5000
	});
	client.getTransaction(txid, function(err, result, resHeaders) {
		if (err) {
			return console.log(err);
			res.json(err)
		}
		res.json(result);
	});
	
});

module.exports = router;