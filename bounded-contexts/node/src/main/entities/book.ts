import { Item } from './item'
import { ItemId } from './item-id'

export class Book implements Item {
  get itemId(): ItemId {
    return new ItemId('789')
  }

  get weight(): number {
    return 56
  }
}
