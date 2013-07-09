LitecoinStats
=============

Gets your stats from mine-litecoin.com and sends them to you in a daily email

To Install
==========
1) npm install nodemailer

2) Create config file in same directory as LitecoinStats.js

FileName: config.js
FileContents:

var config = {}

config.apikey = 'xxxxxxxxx';
config.gmailUsername = 'xxxxxxxxx@gmail.com';
config.gmailPassword = 'xxxxxxxxx';
config.emailTo = 'John Doe <user@domain>';

module.exports = config;


To Run
=======
node LitecoinStats.js


Ideally you would set this as a scheduled task to be run every day/night on a machine that is always powered on so you could get an email with your daily stats.


