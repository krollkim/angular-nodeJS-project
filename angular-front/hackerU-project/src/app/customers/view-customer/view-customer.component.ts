import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customers } from '../customers.interface';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent {
  customer?: Customers;
  sub?: Subscription;
  viewForm?: FormGroup;
  isReturened?: boolean;

  // form and group controls
  buildForm(item?: Customers) {
    this.viewForm = new FormGroup({
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


// returning to main page
return(){
  this.router.navigate(["/"]);
}

// getting Customer using id
getCustomer(id?: string | number) {
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
          this.isReturened = true;
            this.getCustomer(params['id']);
        } else {
          this.isReturened = false;
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
