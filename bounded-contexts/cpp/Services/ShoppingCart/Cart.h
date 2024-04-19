#pragma once

#include <vector>
#include "CartItem.h"

namespace Services::ShoppingCart
{
    class Cart
    {
        public:

        Cart(std::vector<CartItem> items)
        {
            this->items = items;
        }

        std::vector<CartItem> getItems() const { return this->items; }
        std::vector<CartItem> items;
    };

}