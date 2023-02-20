import { Component, OnInit } from '@angular/core';
import { Nav } from './navbar.interface';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { UtilityService } from '../Utilityservice';
import { HttpService } from '../http.service';
import { Userlogin } from '../login/login.interface';
import { finalize } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  active?: string;
  isOpen: boolean = false

  menu: Nav[] = [

    { route: '/home', title: 'home', icon: 'home' },
    { route: '/tasks', title: 'tasks', icon: 'check-square-o'},
    { route: '/', title: 'customers', icon: ' fa fa-group' },
    { route: '/about', title: 'about', icon: '	fa fa-info' },
    {route: '/login', title: 'login', icon: ' fa fa-group', loginRequired: true},
    {route: '/signup', title: 'signup', icon: '	fa fa-pencil-square-o', loginRequired: true},
];

sideBar: Nav[] = [
  ...this.menu,
  { route: '/', title: 'home', icon: 'home' },
  { route: '/tasks', title: 'tasks', icon: 'check-square-o'},
  { route: '/customers', title: 'customers', icon: ' fa fa-group' },
  { route: '/about', title: 'about', icon: '	fa fa-info' },
  {route: '/login', title: 'login', icon: ' fa fa-group', loginRequired: true},
  {route: '/signup', title: 'signup', icon: '	fa fa-pencil-square-o', loginRequired: true},
];


   logout() {
    const sub = this.http.get("logout").pipe(finalize(() => {
        if (sub?.unsubscribe) {
            sub.unsubscribe();
        }
    })).subscribe(() => {
        this.utility.setUser();
        this.router.navigate(['login']);
    });
}

  constructor(public utility: UtilityService, private http: HttpService, private router: Router) { 
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
