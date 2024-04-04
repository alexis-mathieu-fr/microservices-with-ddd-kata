from myshop.entities.item import Item
from myshop.entities.item_id import ItemId


class Book(Item):
    def __init__(self, *, id: ItemId, title: str, weight: float):
        self._id = id
        self._weight = weight
        self.title = title

    def item_id(self) -> ItemId:
        return self._id

    def weight(self) -> float:
        return self._weight
