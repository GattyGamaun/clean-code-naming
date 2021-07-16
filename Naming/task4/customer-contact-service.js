const CustomerContact = require('./thirdparty/customer-contact');
const CustomerContactDAO = require('./thirdparty/customer-contact-dao');

module.exports = class CustomerContactService {
    constructor({CustomerContactDAO: service}) {
        this.customerContactDAO = service;
    }

    findDetailsById(id) {
        return this.customerContactDAO.findById(id);
    }

    updateDetails({CustomerContact: details}) {
        this.customerContactDAO.update(details);
    }
};
