from myshop.services.shoppingcart.cart import CartItem
from typing import List


class ShoppingCartService:
    def __init__(self, cart_items: List[CartItem]) -> None:
        self.items = cart_items
