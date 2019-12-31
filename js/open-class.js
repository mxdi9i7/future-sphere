// import console from "../assets/vendor/plyr/src/js/console";
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./test'));

var mailchimpInstance   = 'us4',
    listUniqueId        = '59c9e8b0a2',
    mailchimpApiKey     = '92ea92dd2cea47d892e1bab7357861fe-us4';

app.post('./test', function (req, res) {
    req
        .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
        .set('Content-Type', 'application/json;charset=utf-8')
        .set('Authorization', 'Basic ' + new Buffer('any:' + mailchimpApiKey ).toString('base64'))
        .send({
            'status': 'subscribed',
            'merge_fields': {
                'EMAIL': req.body.email,
                'NAME': req.body.name,
                'WECHAT': req.body.wechat,
                'PHONE': req.body.number,
            }
        })
        .end(function(err, response) {
            if (response.status < 300 || (response.status === 400 && response.body.title === 'Member Exists')) {
                console.log('success');
                res.send('Signed Up!');
            } else {
                console.log('error');
                res.send('Sign Up Failed :(');
            }
        });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

