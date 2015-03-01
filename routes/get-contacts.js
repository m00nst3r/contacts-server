var Contacts    = require('../schemes/contacts');

var getUser = function (req, res) {
    Contacts.find(function (err, contacts) {
        if(err)
            res.send(err);

        res.json(contacts);
    })
};

var createContact = function (req, res) {
    var contact = new Contacts();
    contact.FirstName = req.body.FirstName;
    contact.LastName = req.body.LastName;
    contact.Phone = req.body.Phone;
    contact.Email = req.body.Email;

    contact.save(function (err) {
        if (err)
            res.send(err);

        res.json({ message: 'Contact Saved!' });
    })
};

exports.GetUser = getUser;
exports.CreateContact = createContact;