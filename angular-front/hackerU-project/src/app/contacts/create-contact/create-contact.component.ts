import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Contacts } from '../contacts.interface';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent {
  isSended = false;
  sub?: Subscription;
  
contactForm = new FormGroup({
        firstName: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30),
        ]),
        lastName: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30),
        ]),
        birthday: new FormControl('', [
          Validators.required,

        ]),
        email: new FormControl('', [
            Validators.required,
            Validators.email,
            
        ]),
        phone: new FormControl('', [
            Validators.required,
            Validators.minLength(9),
            Validators.maxLength(30),
        ]),
        state: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30),
        ]),
        city: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30),
        ]),
        street: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30),
        ]),
        postalCode: new FormControl('', [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(30),
        ]),
    });


add(){
  const sub = this.http.post<Contacts[]>("contact", this.contactForm.value).pipe(finalize(() => {
      if (sub?.unsubscribe) {
          sub.unsubscribe();
      }
  })).subscribe(data => {
      this.isSended = true;
      this.router.navigate(['/contacts']);
      
  });
}

constructor(private http: HttpService, private router: Router) { }

}
