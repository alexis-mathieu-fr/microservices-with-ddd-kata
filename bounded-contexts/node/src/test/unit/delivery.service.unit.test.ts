import { DeliveryService } from '../../main/services/shipping/delivery.service'
import { fakeCart } from '../../main/fake-data'
import { CatalogService } from '../../main/services/catalog/catalog.service'

describe('Microservices DDD kata tests', () => {
  describe('unit tests', () => {
    describe('delivery service', () => {
      describe('calculateOrderWeight', () => {
        test('should return the order weight given a cart', () => {
          // Given
          const catalogService = new CatalogService()
          const deliveryService = new DeliveryService(catalogService)
          // When
          const result = deliveryService.calculateOrderWeight(fakeCart)
          // Then
          expect(result).toBe(1470)
        })
      })
    })
  })
})
