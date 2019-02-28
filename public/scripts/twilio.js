//secrets file containing token and phone numbers
const secrets = require('./secrets');

var accountSid = secrets.twilioAccountSid; // Your Account SID from www.twilio.com/console
var authToken = secrets.twilioAuthToken;   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: secrets.twilioTo,  // Text this number
    from: secrets.twilioFrom // From a valid Twilio number
})
.then((message) => console.log(message.sid));