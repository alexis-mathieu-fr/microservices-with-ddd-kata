import { Controller, Get, Param } from '@nestjs/common'
import { DeliveryService } from '../../services/shipping/delivery.service'
import { Cart } from '../../entities/cart'
import { fakeCart } from '../../fake-data'

@Controller('shipping-weight')
export class ShippingWeightController {
  readonly #deliveryService: DeliveryService

  constructor(deliveryService: DeliveryService) {
    this.#deliveryService = deliveryService
  }

  @Get('/:id')
  shippingWeight(@Param('id') cart: Cart) {
    /**
     * Use fake data for test purpose
     * TODO: replace with a real implementation
     */
    cart = fakeCart
    return this.#deliveryService.calculateOrderWeight(cart)
  }
}
