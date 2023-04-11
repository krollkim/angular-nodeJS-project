import { Component, OnInit } from '@angular/core';
import { Nav } from './navbar.interface';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { UtilityService } from '../Utilityservice';
import { HttpService } from '../http.service';
import { Userlogin } from '../login/login.interface';
import { finalize } from 'rxjs';
import { SocialAuthService } from '@abacritt/angularx-social-login';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  active?: string;
  isOpen: boolean = false

  // top navbar
  menu: Nav[] = [

    { route: '/home', title: 'home', icon: 'home', logOutState: true },
    { route: '/tasks', title: 'tasks', icon: 'check-square-o', logOutState: true},
    { route: '/', title: 'customers', icon: ' fa fa-group', logOutState: true },
    { route: '/contacts', title: 'contacts', icon: ' fa fa-phone', logOutState: true },
    { route: '/about', title: 'about', icon: '	fa fa-info' },
    {route: '/login', title: 'login', icon: ' fa fa-sign-in', loginState: true},
    {route: '/signup', title: 'signup', icon: '	fa fa-pencil-square-o', loginState: true},
];

// side navbar
sideBar: Nav[] = [
  ...this.menu,
    { route: '/home', title: 'home', icon: 'home', logOutState: true },
    { route: '/tasks', title: 'tasks', icon: 'check-square-o', logOutState: true},
    { route: '/', title: 'customers', icon: ' fa fa-group', logOutState: true },
    { route: '/contacts', title: 'contacts', icon: ' fa fa-phone', logOutState: true },
    { route: '/about', title: 'about', icon: '	fa fa-info' },
    {route: '/login', title: 'login', icon: ' fa fa-group', loginState: true},
    {route: '/signup', title: 'signup', icon: '	fa fa-pencil-square-o', loginState: true},
];

   // logout function using utility service, clearing the session and seting that there is no user connected
   logout() {
    const sub = this.http.get("logout").pipe(finalize(() => {
        if (sub?.unsubscribe) {
            sub.unsubscribe();
        }
    })).subscribe(() => {
      this.authService.signOut();
        this.utility.setUser();
        this.router.navigate(['login']);
    });
}

  constructor(public utility: UtilityService, private http: HttpService, private router: Router, private authService: SocialAuthService) { 
    router.events.subscribe(ev => {
      if (ev instanceof NavigationStart) {
        this.active = ev.url;
        this.isOpen = false;
      }
    }) 
  }


  ngOnInit() {
      const sub = this.http.get<Userlogin>("login").pipe(finalize(() => {
          if (sub?.unsubscribe) {
              sub.unsubscribe();
          }
      })).subscribe(data => {
          if (data.status == 'error') {
              this.router.navigate(['login']);
          } else {
              this.utility.setUser(data.user);
          }
      });
  }
}
