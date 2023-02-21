import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Customers } from '../customers.interface';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
})
export class EditCustomerComponent {
  customer?: Customers;
  sub?: Subscription;
  editForm?: FormGroup;

  buildForm(item?: Customers) {
    this.editForm = new FormGroup({
      firstName: new FormControl(item?.firstName, [
            Validators.required,
        ]),
        lastName: new FormControl(item?.lastName, [
            Validators.required,
        ]),
        email: new FormControl(item?.email, [
            Validators.required,
            Validators.email,
        ]),
        phone: new FormControl(item?.phone, [
            Validators.required,
        ]),
        address: new FormControl(item?.address, [
            Validators.required,
        ]),
        notes: new FormControl(item?.notes),
    });
}

  updateCustomer() {
    const customerId = this.customer?.id;
  if (!customerId) {
    return;
  }
    const sub = this.http.put<void>(`customers/${customerId}`, this.editForm?.value).subscribe(() => {
       this.router.navigate(["/"]);
        sub.unsubscribe(); 
    });
}
return(){
  this.router.navigate(["/"]);
}

getCustomer(id: string) {
    const sub = this.http.get<Customers>(`customers/${id}`).subscribe(item => {
      this.customer = item;
      this.buildForm(item);
      sub.unsubscribe();
    },
  );
}

  constructor(private route: ActivatedRoute, private http: HttpService, private router: Router) {

    this.sub = this.route.params.subscribe(params => {
        if (params['id']) {
            this.getCustomer(params['id']);
        } else {
            this.buildForm();
        }
    });
}

  ngOnInit() {
    
  }

  ngOnDestroy() {
      this.sub?.unsubscribe();
  }
}
