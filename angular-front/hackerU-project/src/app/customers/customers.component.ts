import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { HttpService } from '../http.service';
import { UtilityService } from '../Utilityservice';
import { Customers } from './customers.interface';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {

  data: Customers[] = [];
  newCustomer?: string;
  customer?: string;
  searchVal?: any;

  addedCustomer: Customers = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      createdAt: '',
      notes: '', 
      isDeleted: false,
  }

  displayMode: 'card' | 'table' | 'folder' = 'table';

 
  addCustomer(){
    const sub =  this.http.post<Customers[]>("Customers", {customer: this.newCustomer}).subscribe(data => {
        this.data = data;
        console.log(data);
        
    });
 }

 remove(c: Customers){
  const sub = this.http.delete<void>(`Customers/${c.id}`).subscribe(() => {
    const i = this.data.findIndex(x => x.id === c.id);
    this.data.splice(i, 1);
    console.log(c.id);
    sub.unsubscribe();
     });
 }
 constructor(private http: HttpService, private router: Router, public utility: UtilityService) { }

 ngOnInit(): void {
    const sub = this.http.get<Customers[]>("customers").pipe(finalize(() => {
      if(sub?.unsubscribe){
        sub.unsubscribe();
      }
    })).subscribe(data => {
      
      this.data = data
    });
  }
}
