using System.Collections.Generic;

namespace MyShop.Services.Shipping
{
    public class Cart
    {
        public Cart(IEnumerable<CartItem> items)
        {
            Items = items;
        }

        private IEnumerable<CartItem> Items { get; }

        public IEnumerable<CartItem> GetItems() => Items;
    }
}
