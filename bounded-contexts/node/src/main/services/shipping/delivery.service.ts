import { Cart } from '../../entities/cart'
import { CatalogService } from '../catalog/catalog.service'

export class DeliveryService {
  readonly #catalogService: CatalogService

  constructor(catalogService: CatalogService) {
    this.#catalogService = catalogService
  }

  calculateOrderWeight(cart: Cart) {
    return cart
      .items()
      .map(
        (cartItem) =>
          cartItem.quantity.quantity() *
          this.#catalogService.loadItem(cartItem.itemId).weight,
      )
      .reduce((sum, weight) => sum + weight, 0)
  }
}
