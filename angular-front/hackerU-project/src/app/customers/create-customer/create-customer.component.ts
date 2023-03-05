import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Customers } from '../customers.interface';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent {
    isSended = false;
    sub?: Subscription;
    
  customerForm = new FormGroup({
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
          email: new FormControl('', [
              Validators.required,
              Validators.email,
              
          ]),
          phone: new FormControl('', [
              Validators.required,
              Validators.minLength(9),
              Validators.maxLength(30),
          ]),
          address: new FormControl('', [
            Validators.required,
          ]),
          notes: new FormControl('', [
              
          ]),
      });
  

  add(){
    const sub = this.http.post<Customers[]>("customer", this.customerForm.value).pipe(finalize(() => {
        if (sub?.unsubscribe) {
            sub.unsubscribe();
        }
    })).subscribe(data => {
        this.isSended = true;
        this.router.navigate(['/']);
        
    });
  }

  constructor(private http: HttpService, private router: Router) { }


}
