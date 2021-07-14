const NotDeliverableOrderError = require('./thirdparty/not-deliverable-order-error');

module.exports = class DeliveryOrderService {
    constructor(delivery, order) {
        this.primaryDeliveryService = delivery;
        this.fulfilmentOrderService = order;
    }

    submitOrderToFulfilmentOrderService(order) {
        if (this.primaryDeliveryService.isDeliverable(order)) {
            const products = order.getProducts();
            this.fulfilmentOrderService.fulfilProducts(products);
        } else {
            throw new NotDeliverableOrderError();
        }
    }

    setPrimaryDeliveryService(service) {
        this.primaryDeliveryService = service;
    }

    setFulfilmentOrderService(service) {
        this.fulfilmentOrderService = service;
    }
};
