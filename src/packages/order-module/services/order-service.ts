import { Injectable } from "@nestjs/common";
import { Coupon, Item, Order } from "../order-types/dtos/order";
import { nanoid } from 'nanoid'

let orders:Order[] = []
let coupons: Coupon[] = []

@Injectable()
export class OrderService {

  private Items: Item[] =[
    {
      id: 1,
      name: 'orange',
      price: 10
    },
    {
      id: 2,
      name: 'orange',
      price: 15
    },
    {
      id: 3,
      name: 'mango',
      price: 20
    },
  ]
  constructor(
  ) {}

  getOrder(){
    return '212';
  }

  addItem(itemId){

    const item = this.Items.find(i=>i.id === itemId)
    orders[orders.length-1].items.push(item)
    return orders[orders.length-1];
  }

  checkout(couponCode){

  }

  createOrder(){
    orders.push({
      id: nanoid(),
      items:[]
    })
  }

  createCoupon(coupon: Coupon){
    coupons.push(coupon)
    return coupons;
  }

}