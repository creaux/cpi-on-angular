import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private service: AuthService,
    private router: Router,
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.service.isLoggedIn().map((data) => {
      // MISSING API SUPPORT: There has to be validation per each request. Token has to be
      // send with each restricted access and result will cause true or false in guard
      if (data.token === 'QpwL5tke4Pnpja7X') {
        return true;
      }
      this.router.navigateByUrl('/login');
      return false;
    }).catch(() => {
      this.router.navigateByUrl('/login');
      return of(false);
    });
  }
}
