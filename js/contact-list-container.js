// js/components/contact-list-container.js

var React = require('react');

var CONTACTS = require('../contacts');

var ContactListContainer = function() {
    return <ContactList contacts={CONTACTS} />;
};

module.exports = ContactListContainer;