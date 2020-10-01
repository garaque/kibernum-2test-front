import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  title = 'Customers List';
  customers: Customer[];

  constructor(private service: CustomersService) { }

  ngOnInit() {
    this.service.findAll().subscribe(customers => {
      this.customers = customers;
    });
  }

}
