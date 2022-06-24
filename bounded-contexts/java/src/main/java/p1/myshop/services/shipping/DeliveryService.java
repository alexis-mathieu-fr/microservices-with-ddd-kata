package p1.myshop.services.shipping;

import p1.myshop.services.catalog.CatalogService;
import p1.myshop.services.shoppingcart.Cart;

public class DeliveryService {
    private final CatalogService catalogService;

    public DeliveryService(CatalogService catalogService) {
        this.catalogService = catalogService;
    }

    public double calculateOrderWeight(Cart cart) {
        return cart.items().stream()
                .mapToDouble(cartItem -> cartItem.quantity.quantity() * catalogService.loadItem(cartItem.itemId).weight())
                .sum();
    }
}
