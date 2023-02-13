import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from 'src/packages/order-module/services/order-service';


@Controller({ path: '/user/order' })
export class UserOrderController {
  
  constructor(private readonly orderService: OrderService) {}

  @Post('/item')
  addItem(
    @Body() itemId: number,
  ) {
    return this.orderService.addItem(itemId);
  }
}
