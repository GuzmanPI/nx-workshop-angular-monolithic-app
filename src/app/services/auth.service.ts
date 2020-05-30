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
import {
  BehaviorSubject,
  combineLatest,
  EMPTY,
  from,
  Observable,
  of,
  Subject,
} from 'rxjs';
import { Product } from '../models/product.model';
import { ApiResponse } from '../models/api-response.model';
import { StorageUtils } from '../utils/storage.utils';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private sessionSubject = new BehaviorSubject<string>(
    StorageUtils.retrieve('session')
  );
  session$ = this.sessionSubject.pipe(distinctUntilChanged());

  setSession(type: string): void {
    this.sessionSubject.next(type);
  }
}
