import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { UsersService } from '../services/users.service';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { StorageUtils } from '../utils/storage.utils';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, AfterViewInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();

  limit$ = this.usersService.limit$;
  users$ = this.usersService.users$;
  isLoading$ = this.usersService.isLoading$;
  searchNameValue = new FormControl();

  pageIndex = 1;
  pageSize = 10;
  total = 100;

  constructor(private router: Router, private usersService: UsersService) {}

  ngOnInit(): void {
    this.searchNameValue.valueChanges
      .pipe(debounceTime(400), takeUntil(this.unsubscribe))
      .subscribe((name: string) => this.usersService.filterUsersByName(name));
  }

  ngAfterViewInit(): void {
    this.searchNameValue.setValue('');
  }

  resetNameSearch(): void {
    this.searchNameValue.patchValue('');
  }

  setResultsLimit(results: number): void {
    this.usersService.setResultsLimit(results);
  }

  navigateToSales(user: User, url: string): void {
    StorageUtils.store('salesHistory', user.salesHistory);
    this.router.navigateByUrl(`/users/${user._id}/${url}`);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
