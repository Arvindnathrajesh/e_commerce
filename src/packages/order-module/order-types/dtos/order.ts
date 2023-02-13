
export class Item{
    id: number;
    name: string;
    price: number;
}

export class Order{
    orderId: number;
    items: Item[];
}