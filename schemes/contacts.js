// schemes/contacts.js

var mongoose    = require('mongoose');
var Scheme      = mongoose.Schema;

var ContactsSchema = new Scheme({
    FirstName: String,
    LastName: String,
    Photo: String,
    Phone: String,
    Email: String
});

module.exports = mongoose.model('Contacts', ContactsSchema);