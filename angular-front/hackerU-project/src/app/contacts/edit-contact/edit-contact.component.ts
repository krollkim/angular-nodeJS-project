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
return(){
  this.router.navigate(["/"]);
}
// getting Contacts function
getContact(id: string) {
    const sub = this.http.get<Contacts>(`contacts/${id}`).subscribe(item => {
      this.contact = item;
      this.buildForm(item);
      sub.unsubscribe();
    },
  );
}

  constructor(private route: ActivatedRoute, private http: HttpService, private router: Router, private date: DatePipe) {

    this.sub = this.route.params.subscribe(params => {
        if (params['id']) {
            this.getContact(params['id']);
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
