
export class Item{
    id: number;
    name: string;
    price: number;
}

export class Order{
    id: string;
    items: Item[];
}

export class Coupon{
    couponCode: string;
    orderCount: number;
}