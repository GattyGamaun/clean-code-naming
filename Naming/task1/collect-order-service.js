const { message } = require('./thirdparty/message');

module.exports = class CollectOrderService {
    constructor(order, customer) {
        this.administrativeOrderService = order;
        this.customerGlobalService = customer;
        this.INFO_NOTIFICATION_LEVEL = 4;
        this.CRITICAL_NOTIFICATION_LEVEL = 1;
    }

    submitOrderToCustomer(order) {
        if (this.administrativeOrderService.isEligibleForCollection(order))
            this.customerGlobalService.notifyCustomer(message.READY_FOR_COLLECT, this.INFO_NOTIFICATION_LEVEL);
        else
            this.customerGlobalService.notifyCustomer(message.IMPOSSIBLE_TO_COLLECT, this.CRITICAL_NOTIFICATION_LEVEL);
    }

    setAdministrativeOrderService(service) {
        this.administrativeOrderService = service;
    }

    setCustomerGlobalService(service) {
        this.customerGlobalService = service;
    }
};
