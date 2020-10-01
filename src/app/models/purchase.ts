import { Customer } from './customer';
import { PurchaseDetail } from './purchasedetail';

export class Purchase {

id: number;
date: string;
total: number;
customer: Customer;
details: PurchaseDetail;
}
