import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { finalize } from 'rxjs/operators';
import { Userlogin } from './login.interface';
import { UtilityService } from '../Utilityservice';
import { Router } from '@angular/router';
import { SocialAuthService } from '@abacritt/angularx-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../signup/signup.component.scss'
]
})
export class LoginComponent implements OnInit {
  errorMessage?: string;
  user?: any; 
  loggedIn?: boolean; 

  loginForm = new FormGroup({
    userName: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(12),
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),

  });

  login() {
    this.errorMessage = '';

    const sub = this.http.post<Userlogin>('login', this.loginForm.value).pipe(finalize(() => {
        if (sub?.unsubscribe) {
            sub.unsubscribe();
        }
    })).subscribe(data => {
        if(data.status == 'error'){
          this.errorMessage = data.message;
        }
        else{
          this.utility.setUser(data.user);
          this.router.navigate(['']);
        }
        
    });
}
constructor(private http: HttpService, private utility: UtilityService, private router: Router, private authService: SocialAuthService 
) { }
  ngOnInit(){

    if(this.utility.getUser()){
      this.router.navigate(['']);
    }

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if (this.loggedIn) {
        this.router.navigate(['']);
      }
      const sub = this.http.post('googleLogin', this.user).subscribe(data => {

          this.utility.setUser(this.user);
          this.router.navigate(['']);
        
      })
        console.log(this.user); 
    });

    
    }

}