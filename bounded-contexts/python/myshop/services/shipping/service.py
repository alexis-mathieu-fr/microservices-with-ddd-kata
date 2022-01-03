from myshop.services.catalog.service import CatalogService
from myshop.services.shoppingcart.cart import Cart


class ShippingService:
    def __init__(self, catalog_service: CatalogService):
        self.catalog_service = catalog_service

    def calculate_order_weight(self, cart: Cart) -> float:
        ids = [c.item_id for c in cart.items]
        items = [self.catalog_service.load_item(id) for id in ids]
        weigths = [item.weight() for item in items]
        return sum(weigths)
