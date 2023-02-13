import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { OrderService } from 'src/packages/order-module/services/order-service';


@Controller({ path: '/user/order' })
export class UserOrderController {
  
  constructor(private readonly orderService: OrderService) {}

  @Post('/item')
  addItem(
    @Body() body: { itemId: number },
  ) {
    return this.orderService.addItem(body.itemId);
  }

  @Put('/checkout')
  checkout(
    @Body() body: { couponCode: string },
  ) {
    return this.orderService.checkout(body.couponCode);
  }
}
