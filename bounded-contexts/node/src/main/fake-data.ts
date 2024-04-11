import { Cart } from './entities/cart'
import { CartLine } from './entities/cart-line'
import { Quantity } from './entities/quantity'
import { Item } from './entities/item'
import { ItemId } from './entities/item-id'

const fakeItems: Item[] = [
  {
    itemId: new ItemId('123'),
    weight: 456,
  },
  {
    itemId: new ItemId('223'),
    weight: 51,
  },
]

const fakeCartItems: CartLine[] = [
  new CartLine(fakeItems[0].itemId, new Quantity(3)),
  new CartLine(fakeItems[1].itemId, new Quantity(2)),
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
