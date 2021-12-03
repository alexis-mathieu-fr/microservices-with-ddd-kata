from myshop.entities.item import Item
from myshop.entities.item_id import ItemId
from myshop.entities.has_weight import HasWeight


class Dvd(Item, HasWeight):
    def item_id(self) -> ItemId:
        return ItemId("dvd-42")

    def weight(self) -> float:
        return 0.0
