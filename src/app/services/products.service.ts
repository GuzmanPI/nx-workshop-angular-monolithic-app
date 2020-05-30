import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  concatAll,
  concatMap,
  distinctUntilChanged,
  map,
  mergeMap,
  scan,
  shareReplay,
  switchMap,
  tap,
} from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { Product } from '../models/product.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  private isLoadingSubject = new Subject<boolean>();
  private nameFilterSubject = new Subject<string>();
  private pageSubject = new BehaviorSubject<number>(0);
  private nameFilter$ = this.nameFilterSubject.asObservable();

  isLoading$ = this.isLoadingSubject.asObservable();
  page$ = this.pageSubject.pipe(distinctUntilChanged());

  private dbProducts$: Observable<Product[]> = this.page$.pipe(
    tap(() => this.isLoadingSubject.next(true)),
    switchMap(page =>
      this.httpClient.get<ApiResponse>(
        `${environment.api}/products?page=${page}`
      )
    ),
    map((response: any) => response.data as Product[]),
    tap(() => this.isLoadingSubject.next(false)),
    shareReplay(1)
  );

  products$ = combineLatest([this.dbProducts$, this.nameFilter$]).pipe(
    map(([products, searchNameValue]) => {
      return searchNameValue === ''
        ? products
        : products.filter(product =>
            `${product.name}`.includes(searchNameValue)
          );
    }),
    shareReplay(1)
  );

  filterProductsByName(name: string): void {
    this.nameFilterSubject.next(name);
  }

  setResultsPage(page: number): void {
    this.pageSubject.next(page);
  }
}
