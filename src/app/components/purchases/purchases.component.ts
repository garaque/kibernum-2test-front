import { Component, OnInit } from '@angular/core';
import { Purchase } from '../../models/purchase';
import { PurchasesService } from '../../services/purchases.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  title = 'Purchase List';
  purchases: Purchase[];

  constructor(private service: PurchasesService) { }

  ngOnInit() {
    this.service.findAll().subscribe(purchases => {
      this.purchases = purchases;
    });
  }

}
