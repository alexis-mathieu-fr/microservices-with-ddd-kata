from abc import ABCMeta, abstractmethod


class HasWeight(metaclass=ABCMeta):
    @abstractmethod
    def weight(self) -> float:
        pass
