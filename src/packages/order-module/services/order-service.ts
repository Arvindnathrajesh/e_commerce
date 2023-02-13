import { Injectable } from "@nestjs/common";
import { Coupon, Item, Order } from "../order-types/dtos/order";
import { nanoid } from 'nanoid'
import { BaseError } from "../errors/base-error";

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

  checkout(couponCode: string){

    const order = orders[orders.length-1];
    if(order.items.length===0){
      throw new BaseError('Orde must contain atleast 1 item')
    }
    const isValidCoupon: boolean = this.checkCouponValidity(couponCode)
    order.totalPrice = order.items.reduce((sum, currItem) => {
        return sum + currItem.price;
      }, 0);
    
    if(isValidCoupon){
      order.discount = order.totalPrice/10
      order.finalPrice = order.totalPrice - order.discount
    }
    else{
      order.finalPrice = order.totalPrice
    }
    this.createOrder()

    return order;
  }

  checkCouponValidity(couponCode){
    const coupon = coupons.find(c=>c.couponCode === couponCode)
    if(!coupon){
      return false;
    }
    const orderNo = orders.length
    if( orderNo % coupon.orderCount === 0){
      return true;
    }
    return false;
  }

  createOrder(){
    orders.push({
      id: nanoid(),
      items: [],
      totalPrice: 0,
      discount: 0,
      finalPrice: 0
    })
  }

  createCoupon(coupon: Coupon){
    coupons.push(coupon)
    return coupons;
  }

}