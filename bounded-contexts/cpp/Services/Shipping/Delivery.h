#pragma once

#include "Catalog/Service.h"
#include "ShoppingCart/Cart.h"

namespace Services::Shipping
{

    class Delivery
    {
        public:

        explicit Delivery(Catalog::Service &catalogService) : catalogService(catalogService) {}

        const Catalog::Service &getService() { return catalogService; }

        double calculateOrderWeight(ShoppingCart::Cart cart)
        {
            int orderWeight = 0;

            for (auto& item : cart.getItems())
            {
                orderWeight += item.quantity * catalogService.loadItem(item.itemId).weight;
            }
            return orderWeight;
        }
        Catalog::Service &catalogService;
    };
}