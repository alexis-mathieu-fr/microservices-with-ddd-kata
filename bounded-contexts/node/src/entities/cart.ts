import { CartItem } from './cart-Item'

export class Cart {
  readonly #items: readonly CartItem[]

  constructor(items: Array<CartItem>) {
    this.#items = Object.freeze(items)
  }

  items(): readonly CartItem[] {
    return this.#items
  }
}
