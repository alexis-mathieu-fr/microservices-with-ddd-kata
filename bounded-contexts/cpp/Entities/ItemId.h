#pragma once

#include <string_view>
namespace Entities
{
    class ItemId
    {
        public:

        ItemId() = default;

        ItemId  fromString(std::string_view s)
        {
            return ItemId();
        }
    };
}