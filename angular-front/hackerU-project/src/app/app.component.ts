// import { SocialAuthService } from '@abacritt/angularx-social-login';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { HttpService } from './http.service';
import { Userlogin } from './login/login.interface';
import { UtilityService } from './Utilityservice';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRM-Site-Project';

  constructor(public utility: UtilityService, private http: HttpService, private router: Router, private authService: SocialAuthService) { }

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
