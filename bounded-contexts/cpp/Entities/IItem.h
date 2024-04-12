#pragma once

#include "IHasWeight.h"
#include "ItemId.h"

namespace Entities
{
    class IItem : public IHasWeight
    {
        public:

            IItem() = default;

            ItemId getItemId() { return itemId; }
            ItemId  itemId;
    };
}