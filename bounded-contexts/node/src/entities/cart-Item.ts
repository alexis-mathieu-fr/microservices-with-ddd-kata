import { Quantity } from './quantity'
import { ItemId } from './item-id'

export class CartItem {
  readonly #itemId: ItemId
  readonly #quantity: Quantity

  constructor(itemId: ItemId, quantity: Quantity) {
    this.#itemId = itemId
    this.#quantity = quantity
  }

  get quantity() {
    return this.#quantity
  }

  get itemId(): ItemId {
    return this.#itemId
  }
}
