#pragma once

#include "Entities/ItemId.h"

namespace Services::ShoppingCart
{
    class CartItem
    {
        public:

        CartItem(Entities::ItemId& itemId, int quantity)
        {
            this->itemId = itemId;
            this->quantity = quantity;
        }

        Entities::ItemId    itemId;
        int                 quantity;
    };
}