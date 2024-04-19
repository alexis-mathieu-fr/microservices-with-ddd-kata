export class ItemId {
  readonly #id: string

  constructor(id: string) {
    this.#id = id
  }

  get id() {
    return this.#id
  }
}
