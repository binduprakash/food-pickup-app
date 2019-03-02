//secrets file contains token and phone numbers

const secrets = require('./secrets');

var accountSid = secrets.twilioAccountSid; // Your Account SID from www.twilio.com/console
var authToken = secrets.twilioAuthToken;   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);


exports.twilioTextMessage = function(stringMsg, phone) {
    
    client.messages.create({
        body: stringMsg,
        to: phone,  // Text this number
        from: secrets.twilioFrom // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
}