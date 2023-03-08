import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { Contacts } from '../contacts.interface';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent {
  contact?: Contacts;
  sub?: Subscription;
  viewForm?: FormGroup;
  isReturened?: boolean;

  // form and group controls
  buildForm(item?: Contacts) {
    this.viewForm = new FormGroup({
      firstName: new FormControl(item?.firstName, [
            Validators.required,
        ]),
        lastName: new FormControl(item?.lastName, [
            Validators.required,
        ]),
        birthday: new FormControl(this.date.transform(item?.birthday, "yyyy-MM-dd"), [
          Validators.required,
        ]),
        email: new FormControl(item?.email, [
            Validators.required,
            Validators.email,
        ]),
        phone: new FormControl(item?.phone, [
            Validators.required,
        ]),
        state: new FormControl(item?.state, [
            Validators.required,
        ]),
        city: new FormControl(item?.city, [
            Validators.required,
        ]),
        street: new FormControl(item?.street, [
            Validators.required,
        ]),
        postalCode: new FormControl(item?.postalCode, [
            Validators.required,
        ]),
    });
}

// returning to main page
return(){
  this.router.navigate(["/"]);
}

// getting Contact using id
getContact(id?: string | number) {
    const sub = this.http.get<Contacts>(`contacts/${id}`).subscribe(item => {
      this.contact = item;
      this.buildForm(item);
      sub.unsubscribe();
    },
  );
}

  constructor(private route: ActivatedRoute, private http: HttpService, private router: Router, private date: DatePipe) {

    this.sub = this.route.params.subscribe(params => {
      this.isReturened = true;
        if (params['id']) {
            this.getContact(params['id']);
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
