import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminOrderController } from './controllers/admin-order';
import { UserOrderController } from './controllers/user-order';
import { OrderService } from './packages/order-module/services/order-service';

@Module({
  imports: [],
  controllers: [AppController,
    AdminOrderController,
    UserOrderController
  ],
  providers: [AppService, OrderService],
})
export class AppModule {}
