// user-role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const allowedRoles = (next.data['roles'] || []) as string[];

        if (allowedRoles && this.authService.getUserRole() && allowedRoles.includes(this.authService.getUserRole()!)) {
            return true;
          } else {
            // Redirect to an unauthorized page or handle unauthorized access
            return false;
          }
  }
}
