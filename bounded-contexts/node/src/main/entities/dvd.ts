import { Item } from './item'
import { ItemId } from './item-id'

export class Dvd implements Item {
  readonly #itemId: ItemId

  constructor(itemId: ItemId) {
    this.#itemId = itemId
  }

  get itemId(): ItemId {
    return this.#itemId
  }

  get weight(): number {
    return 89
  }
}
