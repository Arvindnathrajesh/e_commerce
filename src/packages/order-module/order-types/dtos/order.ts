// The data transfer objects to store the values.

export class Item{
    id: number;
    name: string;
    price: number;
}

export class Order{
    id: string;
    items: Item[];
    totalPrice: number;
    discount: number;
    finalPrice: number;
}

export class Coupon{
    couponCode: string;
    orderCount: number;
}