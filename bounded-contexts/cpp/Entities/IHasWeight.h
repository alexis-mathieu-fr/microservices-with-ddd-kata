#pragma once

namespace Entities
{
    class IHasWeight
    {
        public:

        double  getWeight() const { return weight; }

        double weight{0}; 
    };
}