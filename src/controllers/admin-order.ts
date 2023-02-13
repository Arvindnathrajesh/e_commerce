import { Body, Controller, Get, Post } from "@nestjs/common";
import { Coupon } from "src/packages/order-module/order-types/dtos/order";
import { OrderService } from "src/packages/order-module/services/order-service";

@Controller({ path: '/admin' })
export class AdminOrderController {
  
  constructor(private readonly orderService: OrderService) {}

  // Admin API to create coupon 
  @Post('/coupon')
  createCoupon(
    @Body() coupon: Coupon,
  ) {
    return this.orderService.createCoupon(coupon);
  }

  // Admin API to list all the orders
  @Get('/orders')
  getOrders(
  ) {
    return this.orderService.getOrders();
  }

}