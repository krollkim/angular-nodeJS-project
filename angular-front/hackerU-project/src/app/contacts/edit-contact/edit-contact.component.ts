import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Contacts } from '../contacts.interface';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent {
  contact?: Contacts;
  sub?: Subscription;
  editForm?: FormGroup;
  isReturened?: boolean;

  // form and group controls
  buildForm(item?: Contacts) {
    this.editForm = new FormGroup({
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

// updating Contact function
  updateContact() {
    const contactsId = this.contact?.id;
  if (!contactsId) {
    return;
  }
    const sub = this.http.put<void>(`contacts/${contactsId}`, this.editForm?.value).subscribe(() => {
       this.router.navigate(["/contacts"]);
        sub.unsubscribe(); 
    });
}
// reseting the data to the defined values
reset(){
  if(this.isReturened) {
    this.getContact(this.contact?.id)
  }else {
      this.buildForm();
  }
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
