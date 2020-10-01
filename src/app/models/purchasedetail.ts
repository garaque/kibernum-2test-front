import { Product } from './product';
import { Purchase } from './purchase';

export class PurchaseDetail {

id: number;
quantity: number;
price: number;
total: number;
product: Product;
purchase: Purchase;
}