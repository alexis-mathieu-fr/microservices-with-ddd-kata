import { CartLine } from './cart-line'

export class Cart {
  readonly #items: readonly CartLine[]

  constructor(items: Array<CartLine>) {
    this.#items = Object.freeze(items)
  }

  items(): readonly CartLine[] {
    return this.#items
  }
}
