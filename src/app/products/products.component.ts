import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ProductsService } from '../services/products.service';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
    `
      .product {
        margin-bottom: 8px;
      }
      .title {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.85);
        line-height: 24px;
        display: block;
        margin-bottom: 16px;
      }
      .item-wrap {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 7px;
        color: rgba(0, 0, 0, 0.65);
      }
      .label {
        margin-right: 8px;
        display: inline-block;
        color: rgba(0, 0, 0, 0.85);
      }
    `,
  ],
})
export class ProductsComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(
    private router: Router,
    private productsService: ProductsService
  ) {}

  private unsubscribe: Subject<void> = new Subject();
  page: number;
  selectedProduct: Product;
  searchNameValue = new FormControl();
  showDetail = false;
  products$ = this.productsService.products$;
  isLoading$ = this.productsService.isLoading$;

  ngOnInit(): void {
    this.page = 0;
    this.searchNameValue.valueChanges
      .pipe(debounceTime(400), takeUntil(this.unsubscribe))
      .subscribe((name: string) =>
        this.productsService.filterProductsByName(name)
      );
  }

  selectProduct(product: Product): void {
    console.log(product);
    this.selectedProduct = product;
    this.open();
  }

  loadPreviousPage(): void {
    if (this.page >= 0) {
      this.page--;
    }
    this.productsService.setResultsPage(this.page);
  }

  loadNextPage(): void {
    if (this.page < 10) {
      this.page++;
    }
    this.productsService.setResultsPage(this.page);
  }

  ngAfterViewInit(): void {
    this.searchNameValue.setValue('');
  }

  resetNameSearch(): void {
    this.searchNameValue.patchValue('');
  }

  private open(): void {
    this.showDetail = true;
  }

  close(): void {
    this.showDetail = false;
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
