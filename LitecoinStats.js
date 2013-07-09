var nodemailer = require("nodemailer");
var http = require('https');
var config = require('./config.js');

http.get({ host: 'www.mine-litecoin.com', path: '/api.php?api_key=' + config.apikey, headers: {'Accept': 'application/json'}}, function(res) { 	
		var data = '';

	    res.on('data', function (chunk){
	        data += chunk;
	    });

	    res.on('end',function(){	 
	        var obj = JSON.parse(data);
	        body = 'User: ' + obj.username + '\r\nAccount Balance: ' + obj.confirmed_rewards + '\r\nCurrent Shares: ' + obj.round_shares + '\r\nEstimated Payout: ' + obj.round_estimate;
	        sendMail(body);

	    });	    
	});

function sendMail(body) {
	var smtpTransport = nodemailer.createTransport("SMTP",{
	   service: "Gmail",
	   auth: {
	       user: config.gmailUsername,
	       pass: config.gmailPassword
	   }
	});

	smtpTransport.sendMail({
	   from: 'LiteCoin Stats <' + config.gmailUsername + '>',
	   to: config.emailTo, 
	   subject: 'LiteCoin Stats', 
	   text: body 
	}, function(error, response){
	   if(error){
	        console.log(error);
			process.exit(0);
	   }else{
	        console.log('Message sent:'  + response.message);
			process.exit(0);
	   }
	});	
}
