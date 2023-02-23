import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {

  constructor(private router:Router,private auth:AuthService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

      if(this.auth.isLoggedIn()){
        return true;
      }
  
      this.router.navigate(['/login']);
      return false;
    
      
    }
    

  
  
}
