from myshop.services.shipping.service import ShippingService
from myshop.services.catalog.service import CatalogService
from myshop.services.shoppingcart.cart import Cart, CartItem
from myshop.entities.quantity import Quantity
from myshop.entities.item_id import ItemId
from myshop.entities.book import Book
from myshop.entities.dvd import Dvd


def test_shipping_things_from_catalog() -> None:
    catalog_service = CatalogService()
    book_id = ItemId("book-42")
    dvd_id = ItemId("dvd-13")
    book = Book(id=book_id, title="War & Peace", weight=2)
    dvd = Dvd(id=dvd_id, title="The Devil Wears Prada")
    catalog_service.add_item(book_id, book)
    catalog_service.add_item(dvd_id, dvd)

    cart = Cart(
        [
            CartItem(item_id=book_id, quantity=Quantity(1)),
            CartItem(item_id=dvd_id, quantity=Quantity(1)),
        ]
    )

    shipping_service = ShippingService(catalog_service)
    weight = shipping_service.calculate_order_weight(cart)

    assert weight == 2.016
