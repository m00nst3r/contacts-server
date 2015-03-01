var Contacts    = require('../schemes/contacts');

var getContact = function (req, res) {
    Contacts.findById(req.params.id, function (err, contact) {
        if (err) res.send(err);
        res.json(contact);
    })
};

var updateContect = function (req, res) {
    Contacts.findById(req.params.id, function (err, contact) {
        if (err) res.send(err);

        contact.FirstName = req.body.FirstName || null;
        contact.LastName = req.body.LastName || null;
        contact.Phone = req.body.Phone || null;
        contact.Email = req.body.Email || null;

        contact.save(function(err){
            if (err) res.send(err);
            res.json({ message: 'contact updated!' });
        });
    })
};

exports.GetContact = getContact;
exports.UpdateContect = updateContect;