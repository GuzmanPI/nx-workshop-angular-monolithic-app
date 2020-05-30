import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import {
  distinctUntilChanged,
  map,
  shareReplay,
  switchMap,
  tap,
} from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  private isLoadingSubject = new Subject<boolean>();
  private nameFilterSubject = new Subject<string>();
  private limitSubject = new BehaviorSubject<number>(10);
  private nameFilter$ = this.nameFilterSubject.asObservable();

  isLoading$ = this.isLoadingSubject.asObservable();
  limit$ = this.limitSubject.pipe(distinctUntilChanged());

  private dbUsers$: Observable<User[]> = this.limit$.pipe(
    tap(() => this.isLoadingSubject.next(true)),
    switchMap(limit =>
      this.httpClient.get<ApiResponse>(
        `${environment.api}/users?limit=${limit}`
      )
    ),
    map((response: any) => response.data as User[]),
    tap(() => this.isLoadingSubject.next(false))
  );

  users$ = combineLatest([this.dbUsers$, this.nameFilter$]).pipe(
    map(([users, searchNameValue]) =>
      searchNameValue === ''
        ? users
        : users.filter(user =>
            `${user.firstName}  ${user.lastName}`.includes(searchNameValue)
          )
    ),
    shareReplay(1)
  );

  filterUsersByName(name: string): void {
    this.nameFilterSubject.next(name);
  }

  setResultsLimit(limit: number): void {
    this.limitSubject.next(limit);
  }
}
