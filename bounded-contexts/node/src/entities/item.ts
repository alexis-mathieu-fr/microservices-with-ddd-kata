import { HasWeight } from './has-weight'
import { ItemId } from './item-id'

export interface Item extends HasWeight {
  itemId: ItemId
}
