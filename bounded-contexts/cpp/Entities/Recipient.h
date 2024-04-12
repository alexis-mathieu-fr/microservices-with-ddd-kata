#pragma once

#include <string_view>
#include <string>

namespace Entities
{
    class Recipient
    {
        public :

        Recipient(std::string_view name)
        {
            this->name = name;
        }
        std::string getName() const { return name; }
        std::string name;
    };
}
