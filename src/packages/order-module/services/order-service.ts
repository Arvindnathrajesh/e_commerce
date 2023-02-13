import { BadRequestException, Injectable } from "@nestjs/common";
import { Coupon, Item, Order } from "../order-types/dtos/order";
import { nanoid } from 'nanoid'

// Global variables to store the data of Orders and Coupons
let orders:Order[] = [{
  id: nanoid(),
  items: [],
  totalPrice: 0,
  discount: 0,
  finalPrice: 0 
}]
let coupons: Coupon[] = []

@Injectable()
export class OrderService {

  //Items
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

  getOrders(){
    return orders;
  }

  // Function to add an item to the order
  addItem(itemId:number){

    const item = this.Items.find((i)=>i.id === itemId)
    //Check if it is an invalid item
    if(!item){
      throw new BadRequestException('Invalid Item', { cause: new Error(), description: 'Invalid Item' })
    }
    const  order = orders[orders.length-1]
    //Add the item to the order and return it
    order.items.push(item)
    this.calculateTotalPrice(order)
    return order;
  }

  checkout(couponCode: string){

    const order = orders[orders.length-1];
    if(order.items.length===0){
      throw new BadRequestException('Order must contain atleast 1 item', { cause: new Error(), description: 'Order must contain atleast 1 item' })
    }
    const isValidCoupon: boolean = this.checkCouponValidity(couponCode)
    
    this.calculateTotalPrice(order)
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
  
  calculateTotalPrice(order:Order){
    order.totalPrice = order.items.reduce((sum, currItem) => {
      return sum + currItem.price;
    }, 0);
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
    const existingCoupon = coupons.find((c)=>c.couponCode === coupon.couponCode)
    if(existingCoupon){
      throw new BadRequestException('Coupon alredy exists', { cause: new Error(), description: 'Coupon alredy exists' })
    }
    coupons.push(coupon)
    return coupons;
  }

}