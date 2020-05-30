import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { SalesHistory } from '../../models/sales-history.model';
import { StorageUtils } from '../../utils/storage.utils';

@Component({
  selector: 'app-team-sales',
  template: `
    <app-bar-chart
      [mySales]="salesHistory.mine"
      [teamSales]="salesHistory.team"
    ></app-bar-chart>

    <ng-template #loading>Please friend, login.</ng-template>
  `,
  styles: [],
})
export class TeamSalesComponent implements OnInit {
  salesHistory: SalesHistory;

  ngOnInit(): void {
    this.salesHistory = StorageUtils.retrieve('salesHistory') as SalesHistory;
  }
}
