import { Cart } from './entities/cart'
import { CartItem } from './entities/cart-Item'
import { Quantity } from './entities/quantity'
import { Item } from './entities/item'

const fakeItems: Item[] = [
  {
    itemId: '123',
    weight: 456,
  },
  {
    itemId: '223',
    weight: 51,
  },
]

const fakeCartItems: CartItem[] = [
  new CartItem(fakeItems[0].itemId, new Quantity(3)),
  new CartItem(fakeItems[1].itemId, new Quantity(2)),
]
const fakeCart = new Cart(fakeCartItems)

console.debug(fakeItems, 'fakeItems')
fakeCartItems.forEach((fakeCartItem, index) => {
  console.debug(
    { itemId: fakeCartItem.itemId, quantity: fakeCartItem.quantity.quantity() },
    `fakeCartItem #${index}`,
  )
})

export { fakeCart, fakeItems }
