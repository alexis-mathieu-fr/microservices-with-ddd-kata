#pragma once

#include "Entities/IItem.h"

namespace Services::Catalog
{
    class Service
    {
        public:
        
        Entities::IItem loadItem(Entities::ItemId& ItemId)
        {
            return Entities::IItem();
        }
    };
}