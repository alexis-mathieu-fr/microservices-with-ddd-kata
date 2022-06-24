package p1.myshop.api;

import p1.myshop.services.shipping.DeliveryService;
import p1.myshop.entities.Cart;

// @RestController 
public class ShippingWeightController {

	// @Autowired
	DeliveryService delivery;

	// @GetMapping("/shippingweight")
	public Object shippingweight(/* @RequestParam */ Cart cart) {
		return delivery.calculateOrderWeight(cart);
	}
}
