import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { StorageUtils } from './utils/storage.utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private location: Location,
    private router: Router
  ) {}
  session$ = this.authService.session$;
  isCollapsed = false;

  login(): void {
    this.router.navigateByUrl('/login');
  }

  goBack(): void {
    this.location.back();
  }
}
