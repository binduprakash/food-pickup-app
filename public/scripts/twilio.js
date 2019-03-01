//secrets file containing token and phone numbers

const twilio = function(stringMsg, phone) {

    console.log(stringMsg, phone)

    
    const secrets = require('./secrets');

    var accountSid = secrets.twilioAccountSid; // Your Account SID from www.twilio.com/console
    var authToken = secrets.twilioAuthToken;   // Your Auth Token from www.twilio.com/console

    var twilio = require('twilio');
    var client = new twilio(accountSid, authToken);

    client.messages.create({
        body: stringMsg,
        to: phone,  // Text this number
        from: secrets.twilioFrom // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));

}

let time = "30 minutes";
let phoneNumber = "+17789274265"

let stringMessage = `Your order will be ready in ${time}`

twilio(stringMessage, phoneNumber)