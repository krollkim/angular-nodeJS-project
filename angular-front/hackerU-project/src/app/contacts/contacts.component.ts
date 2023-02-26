import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { HttpService } from '../http.service';
import { UtilityService } from '../Utilityservice';
import { Contacts } from './contacts.interface';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  contactData: Contacts[] = [];
  newCustomer?: string;
  customer?: string;
  searchVal?: any;

  // reseting all data before using to add data
  addedCustomer: Contacts = {
      id: 0,
      firstName: '',
      lastName: '',
      birthday: '',
      email: '',
      phone: '',
      state: '',
      city: '',
      street: '',
      postalCode: '',
      isDeleted: false,
  }

  // displayMode content and options
  displayMode: 'card' | 'table' | 'folder' = 'table';

 
  // adding adding contacts using post method
  addContact(){
    const sub =  this.http.post<Contacts[]>("contacts", {customer: this.newCustomer}).subscribe(data => {
        this.contactData = data;
    });
 }

 // removing contacts with id
 remove(c: Contacts){
  const sub = this.http.delete<void>(`contacts/${c.id}`).subscribe(() => {
    const i = this.contactData.findIndex(x => x.id === c.id);
    this.contactData.splice(i, 1);
   
    sub.unsubscribe();
     });
 }

  // to double click a contact and navigate to his full data   
 navigateContact(c: Contacts){
  this.router.navigate(['/','contacts','edit-contact', c.id]);
 }
 
 constructor(private http: HttpService, private router: Router, public utility: UtilityService) { }

 ngOnInit(): void {
    const sub = this.http.get<Contacts[]>("contacts").pipe(finalize(() => {
      if(sub?.unsubscribe){
        sub.unsubscribe();
      }
    })).subscribe(data => {
      
      this.contactData = data
    });
  }
}
