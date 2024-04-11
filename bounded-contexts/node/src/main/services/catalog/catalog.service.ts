import { Item } from '../../entities/item'
import { ItemId } from '../../entities/item-id'
import { fakeItems } from '../../fake-data'

export class CatalogService {
  loadItem(itemId: ItemId): Item {
    /**
     * Use fake data for test purpose
     * TODO: replace with a real implementation
     */
    const item = fakeItems.find((fakeItem) => fakeItem.itemId === itemId)
    if (!item) {
      throw new Error('Item not found')
    }
    return item
  }
}
