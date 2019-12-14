var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var mailchimpInstance   = 'us4',
    listUniqueId        = '59c9e8b0a2',
    mailchimpApiKey     = '92ea92dd2cea47d892e1bab7357861fe-us4';

app.post('/open-class', function (req, res) {
    req
        .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
        .set('Content-Type', 'application/json;charset=utf-8')
        .set('Authorization', 'Basic ' + new Buffer('any:' + mailchimpApiKey ).toString('base64'))
        .send({
            'name': req.body.name,
            'wechat': req.body.wechat,
            'email_address': req.body.email,
            'phone_number': req.body.number,
            'status': 'subscribed',
        })
        .end(function(err, response) {
            if (response.status < 300 || (response.status === 400 && response.body.title === 'Member Exists')) {
                res.send('Signed Up!');
            } else {
                res.send('Sign Up Failed :(');
            }
        });
});