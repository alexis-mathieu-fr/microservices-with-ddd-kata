class Quantity:
    def __init__(self, n: int):
        if n < 0:
            raise ValueError(f"Invalid quantity value: {n}")
        self._n = n
