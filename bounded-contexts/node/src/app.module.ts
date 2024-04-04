import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ShippingWeightController } from './api/shipping-weight/shipping-weight.controller'
import { CatalogService } from './services/catalog/catalog.service'
import { DeliveryService } from './services/shipping/delivery.service'
import { ShoppingCartService } from './services/shoppingcart/shopping-cart.service'

@Module({
  imports: [],
  controllers: [AppController, ShippingWeightController],
  providers: [AppService, CatalogService, DeliveryService, ShoppingCartService],
})
export class AppModule {}
