from typing import Dict
from myshop.entities.item_id import ItemId
from myshop.entities.item import Item
from myshop.entities.book import Book
from myshop.entities.dvd import Dvd


class CatalogService:
    def __init__(self) -> None:
        self.items: Dict[ItemId, Item] = {}

    def add_item(self, item_id: ItemId, item: Item) -> None:
        self.items[item_id] = item

    def load_item(self, item_id: ItemId) -> Item:
        return self.items[item_id]
