#pragma once

#include "ItemId.h"

namespace Entities
{
    class Dvd
    {
        public:
        Dvd() = default;

        ItemId  itemId;
        double  weight{0};
    };
}