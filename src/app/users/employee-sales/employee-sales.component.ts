import { Component, OnInit } from '@angular/core';
import { SalesHistory } from '../../models/sales-history.model';
import { StorageUtils } from '../../utils/storage.utils';

@Component({
  selector: 'app-employee-sales',
  template: ` <app-pie-chart [mySales]="salesHistory.mine"></app-pie-chart> `,
})
export class EmployeeSalesComponent implements OnInit {
  salesHistory: SalesHistory;

  ngOnInit(): void {
    this.salesHistory = StorageUtils.retrieve('salesHistory') as SalesHistory;
  }
}
