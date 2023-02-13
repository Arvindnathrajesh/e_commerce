import { Body, Controller, Get, Post } from "@nestjs/common";
import { Coupon } from "src/packages/order-module/order-types/dtos/order";
import { OrderService } from "src/packages/order-module/services/order-service";

@Controller({ path: '/admin' })
export class AdminOrderController {
  
  constructor(private readonly orderService: OrderService) {}

  @Post('/coupon')
  createCoupon(
    @Body() coupon: Coupon,
  ) {
    return this.orderService.createCoupon(coupon);
  }

  @Get('/orders')
  getOrders(
  ) {
    return this.orderService.getOrders();
  }

}