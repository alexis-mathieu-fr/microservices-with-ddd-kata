from myshop.entities.item_id import ItemId
from myshop.entities.quantity import Quantity
from typing import List


class CartItem:
    def __init__(self, item_id: ItemId, quantity: Quantity) -> None:
        self._item_id = item_id
        self._quantity = quantity

    @property
    def item_id(self) -> ItemId:
        return self._item_id


class Cart:
    def __init__(self, items: List[CartItem]) -> None:
        self._items = items

    @property
    def items(self) -> List[CartItem]:
        return self._items
