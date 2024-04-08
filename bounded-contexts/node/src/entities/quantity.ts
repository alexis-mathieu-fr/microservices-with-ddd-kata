export class Quantity {
  readonly #quantity: number

  constructor(quantity: number) {
    this.#quantity = quantity
  }

  quantity(): number {
    return this.#quantity
  }
}
