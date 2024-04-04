from myshop.entities.item import Item
from myshop.entities.item_id import ItemId
from myshop.entities.has_weight import HasWeight


class Dvd(Item, HasWeight):
    def __init__(self, *, id: ItemId, title: str) -> None:
        self._id = id
        self.title = title

    def item_id(self) -> ItemId:
        return self._id

    def weight(self) -> float:
        return 0.016
