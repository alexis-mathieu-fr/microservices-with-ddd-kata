from myshop.entities.item import Item
from myshop.entities.item_id import ItemId


class Book(Item):
    def item_id(self) -> ItemId:
        return ItemId("42")

    def weight(self) -> float:
        return 0.0
