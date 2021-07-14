const CustomerContact = require('./thirdparty/customer-contact');
const CustomerContactDAO = require('./thirdparty/customer-contact-dao');

module.exports = class CustomerContactService {
    constructor(service: CustomerContactDAO) {
        this.customerContactDAO = service;
    }

    findCustomerContactDetailsByCustomerId(id) {
        return this.customerContactDAO.findById(id);
    }

    updateCustomerContactDetails(details: CustomerContact) {
        this.customerContactDAO.update(details);
    }
};
