#pragma once

#include "IItem.h"

namespace Entities
{
    class Book : public IItem
    {
        public:
        Book() = default;

        ItemId  itemId;
        double  weight{0};
    };
}