import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { SalesHistory } from '../../models/sales-history.model';
import { StorageUtils } from '../../utils/storage.utils';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-dard',
  template: `
    <nz-card nzHoverable [nzCover]="coverTemplate">
      <nz-card-meta
        [nzTitle]="product.name"
        [nzDescription]="product.amiiboSeries"
      ></nz-card-meta>
    </nz-card>
    <ng-template #coverTemplate>
      <img
        style="height: auto; width: 100%; padding: 24px 24px 0 24px;"
        [alt]="product.name"
        [src]="product.image"
      />
    </ng-template>
  `,
})
export class ProductCardComponent {
  @Input() product: Product;
}
