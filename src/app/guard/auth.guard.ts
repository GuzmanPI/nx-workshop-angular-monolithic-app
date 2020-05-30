import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageUtils } from '../utils/storage.utils';
import { AuthService } from '../services/auth.service';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    activatedRouteSnapshot: ActivatedRouteSnapshot,
    routerStateSnapshot: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.session$.pipe(
      map(session => !!session),
      take(1),
      tap(allowed => {
        if (!allowed) {
          this.router.navigate(['/login']);
        } else {
          // if (routerStateSnapshot.url === '/login') {
          //   this.router.navigate(['/users']);
          // }
        }
      })
    );
  }
}
