using MyShop.Entities;

namespace MyShop.Services.Shipping
{
    public class CartItem
    {
        public CartItem(ItemId itemId, int quantity)
        {
            ItemId = itemId;
            Quantity = quantity;
        }

        public ItemId ItemId { get; }
        public int Quantity { get; }
    }
}
