import { Item } from '../../entities/item'
import { ItemId } from '../../entities/item-id'
import { fakeItems } from '../../fake-data'
import { Injectable } from '@nestjs/common'

@Injectable()
export class CatalogService {
  loadItem(itemId: ItemId): Item {
    /**
     * Use fake data for test purpose
     * TODO: replace with a real implementation
     */
    return fakeItems.find((item) => item.itemId === itemId)
  }
}
