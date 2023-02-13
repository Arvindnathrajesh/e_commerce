import { Injectable } from "@nestjs/common";
import { Item, Order } from "../order-types/dtos/order";
import { nanoid } from 'nanoid'

let order:Order[] = []

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
    order[order.length-1].items.push(item)
    return order[order.length-1];
  }

  checkout(){

  }

  createOrder(){
    order.push({
      id: nanoid(),
      items:[]
    })
  }

}