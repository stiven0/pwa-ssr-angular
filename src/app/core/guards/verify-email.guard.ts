import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { HandleStorageService } from 'src/app/core/handle-storage.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyEmailGuard implements CanActivate {

  constructor(
    private handleStorageService: HandleStorageService,
    private router: Router
  ){}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if ( !this.handleStorageService.getEmail() ) {
              this.handleStorageService.removeEmail();
              this.router.navigateByUrl('/');
              return false;
      }
      return true;

  }
  
}
