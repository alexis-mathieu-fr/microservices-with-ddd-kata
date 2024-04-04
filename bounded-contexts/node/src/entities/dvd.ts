import { Item } from './item'
import { ItemId } from './item-id'

export class Dvd implements Item {
  get itemId(): ItemId {
    return null
  }

  get weight(): number {
    return 0
  }
}
