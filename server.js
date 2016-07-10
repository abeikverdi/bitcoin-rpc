var express = require('express');
var bitcoin = require('bitcoin');
var app = express();

var client = new bitcoin.Client({
  host: '104.236.132.237',
  port: 8332,
  user: 'abeikverdi',
  pass: 'ali123',
  timeout: 5000
});

client.getInfo('*', 6, function(err, balance, resHeaders) {
		if (err) return console.log(err);
		console.log('Balance:', balance);
	});

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});