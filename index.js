var express     = require('express');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var app         = express();
var router      = express.Router();
var Contacts    = require('./schemes/contacts');
var GetContacts = require('./routes/get-contacts.js');
var Contact     = require('./routes/contact.js');
var CONFIG      = require('./config/config.js');

var port = process.env.PORT || 3000;
//mongoose.connect('mongodb://localhost/test');
mongoose.connect("mongodb://" + CONFIG.DB.user + ":" + CONFIG.DB.password + CONFIG.DB.server);

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

router.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.route('/')
    .get(GetContacts.GetUser)
    .post(GetContacts.CreateContact);

router.route('/contact/:id')
    .get(Contact.GetContact)
    .put(Contact.UpdateContect)
    .delete(Contact.DeleteContact);

router.use(function(req, res, next){
    next();
});

app.use('/', router);

app.listen(port);
console.log('Magic happens on port ' + port);