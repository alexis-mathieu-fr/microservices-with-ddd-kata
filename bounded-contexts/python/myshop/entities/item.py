from abc import ABCMeta, abstractmethod

from myshop.entities.has_weight import HasWeight
from myshop.entities.item_id import ItemId


class Item(HasWeight, metaclass=ABCMeta):
    @abstractmethod
    def item_id(self) -> ItemId:
        pass
