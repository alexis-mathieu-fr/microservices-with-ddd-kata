class ItemId:
    def __init__(self, value: str) -> None:
        self._value = value

    def __hash__(self) -> int:
        return hash(self._value)
