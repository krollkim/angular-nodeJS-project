import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './user.interface';
import { HttpService } from '../http.service';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { UtilityService } from '../Utilityservice';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  errorMessage?: string;
  user?: any; 
  loggedIn?: boolean; 

  signupForm = new FormGroup({
    fullName: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.email,
    ]),
    userName: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(12),
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),

  });

  signup() {
    const sub = this.http.post<User>('signup', this.signupForm.value).pipe(finalize(() => {
        if (sub?.unsubscribe) {
            sub.unsubscribe();
        }
    })).subscribe(data => {
        this.router.navigate(['/login']);
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
  });
}

}
